# Use a Java 17 JDK image to build the Spring Boot app
FROM eclipse-temurin:17-jdk AS build

# Set the working directory
WORKDIR /app

# Copy everything needed for the build
COPY . .

# Ensure the Maven wrapper is executable
RUN chmod +x mvnw

# Build the application (skip tests for faster build)
RUN ./mvnw clean package -DskipTests

# Use a Java 17 runtime image to run the application
FROM eclipse-temurin:17-jre

# Set the working directory
WORKDIR /app

# Copy the built JAR file from the build stage
COPY --from=build /app/target/*.jar app.jar

# Expose port 8080
EXPOSE 8080

# Specify the command to run the application
ENTRYPOINT ["java", "-jar", "/app/app.jar"]
