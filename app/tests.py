from django.db.utils import IntegrityError
from django.test import TestCase
from app.models.user import User
from app.models.event import Event

class UserTestCase(TestCase):
    def setUp(self):
        User.objects.create(email="student@dundermifflin.com", user_type=1, is_student=1)

    def test_user_student_role(self):
        user = User.objects.get(email="student@dundermifflin.com")
        self.assertEqual(user.role().lower(), "student")
        self.assertTrue(user.is_student)

    def test_user_print_full(self):
        user = User.objects.get(email="student@dundermifflin.com")
        user.first_name = "Student"
        user.last_name = "User"
        user.username = "studentuser"
        self.assertEqual(str(user), "Student User (studentuser)")

    def test_user_print(self):
        user = User.objects.get(email="student@dundermifflin.com")
        user.username = "studentuser"
        self.assertEqual(str(user), "studentuser")

class EventTestCase(TestCase):
    def setUp(self):
        user = User.objects.create(username="organizer", email="organizer@dundermifflin.com")
        Event.objects.create(
            name="Office Party",
            date="2019-01-01",
            e_type=1,
            organizer=user
        )

    def test_event_print(self):
        event = Event.objects.get(name="Office Party")
        self.assertEqual(str(event), "Office Party")

    def test_event_organizer(self):
        organizer = User.objects.get(email="organizer@dundermifflin.com")
        event = Event.objects.get(name="Office Party")
        self.assertEqual(event.organizer, organizer)

    def test_event_attendees(self):
        event = Event.objects.get(name="Office Party")
        attendee_1 = User.objects.create(username="attendee1", email="attendee1@dundermifflin.com")
        attendee_2 = User.objects.create(username="attendee2", email="attendee2@dundermifflin.com")
        self.assertEqual(event.attendees.all().count(), 0)
        event.attendees.add(attendee_1)
        self.assertEqual(event.attendees.all().count(), 1)
        event.attendees.add(attendee_2)
        self.assertEqual(event.attendees.all().count(), 2)
