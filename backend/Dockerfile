# Use an official OpenJDK runtime as a parent image
FROM openjdk:17-jdk-alpine

# The application's JAR file (replace with your actual JAR file name)
ARG JAR_FILE=target/pet-care-connect-0.0.1-SNAPSHOT.jar

# Add the application's JAR file to the container
COPY ${JAR_FILE} app.jar

# Expose port 8080
EXPOSE 8080

# Run the JAR file
ENTRYPOINT ["java","-jar","/app.jar"]
