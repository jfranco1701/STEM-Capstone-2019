FROM python:3

# Drop log meesages directly back to the console
ENV PYTHONBUFFERED 1

RUN mkdir /app
WORKDIR /app

# Install dependencies
COPY requirements.txt /app/
RUN pip install -r requirements.txt

# Copy source files
COPY src/ /app/

# Run entrypoint script for initial setup
COPY docker-entrypoint.sh /usr/local/bin/
RUN chmod 755 /usr/local/bin/docker-entrypoint.sh
ENTRYPOINT ["/usr/local/bin/docker-entrypoint.sh"]
