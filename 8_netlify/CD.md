# CD

from wiki

Continuous deployment (CD) is a software engineering approach in which software functionalities are delivered frequently and through automated deployments.

Continuous deployment contrasts with continuous delivery (also abbreviated CD), a similar approach in which software functionalities are also frequently delivered and deemed to be potentially capable of being deployed, but are actually not deployed. As such, continuous deployment can be viewed as a more complete form of automation than continuous delivery.

Motivation
A major motivation for continuous deployment is that deploying software into the field more often makes it easier to find, catch, and fix bugs. A bug is easier to fix when it comes from code deployed five minutes ago instead of five days ago.

Example
In an environment in which data-centric microservices provide the functionality, and where the microservices can have multiple instances, continuous deployment consists of instantiating the new version of a microservice and retiring the old version once it has drained all the requests in flight.

## continuous delivery

Continuous Delivery (CD) is a software engineering approach that focuses on producing software in short cycles, allowing for reliable and frequent releases at any time without manual intervention. The goal is to build, test, and release software with greater speed and frequency, reducing the cost, time, and risk of delivering changes to production. Continuous Delivery contrasts with Continuous Deployment (CD), where automated deployments are made even to production without any manual intervention.

CD is often associated with DevOps, but it is a separate concept. While DevOps encompasses cultural change and collaboration among various teams involved in software delivery, CD is specifically focused on automating the delivery aspect to execute processes quickly and frequently. The deployment pipeline is a crucial part of CD, providing visibility, feedback, and the ability to continually deploy software.

Various tools are used to achieve Continuous Delivery, including continuous integration, application release automation, build automation, and application lifecycle management. Architecting for CD requires meeting architecturally significant requirements (ASRs), such as deployability, modifiability, and testability. Microservices are commonly used to enhance deployability and modifiability in CD environments.

Benefits of Continuous Delivery include accelerated time to market, building the right product through user feedback, improved productivity and efficiency via automation, reliable releases with reduced risks, improved product quality, and increased customer satisfaction. However, some obstacles to CD implementation include customer preferences for fewer updates, domain restrictions, lack of test automation, differences in environments, and the need for human involvement in some quality attribute testing.

Despite challenges, many companies, such as Yahoo!, Amazon, Facebook, Google, and Wells Fargo, have successfully adopted Continuous Delivery principles and practices to enhance their software development and delivery processes.

## continuous integration

Continuous integration (CI) is a software engineering practice where developers merge their code changes into a shared mainline several times a day. It is often coupled with automated builds and testing to ensure that code changes integrate smoothly and do not introduce errors or conflicts. CI originated from Grady Booch's 1991 method, and it was later advocated by Extreme Programming (XP), which encouraged integrating code multiple times per day.

The rationale for CI lies in reducing the risk of integration conflicts and failures when merging code changes back to the mainline. It emphasizes running tests locally before committing to the mainline, using build servers to automate the compilation and testing processes, and employing CI as part of continuous delivery or deployment. CI workflows involve ensuring code passes unit tests before committing, running automated builds and tests of the mainline, and using CI alongside continuous delivery or deployment in a CI/CD pipeline.

CI has a history dating back to the early 1990s, with Grady Booch and XP pioneers like Kent Beck and Ron Jeffries contributing to its development. Various practices are associated with CI, including maintaining a code repository with version control, automating the build process, ensuring self-testing builds, frequent commits to the baseline, building after every commit, using test cases for bug fixes, keeping builds fast, testing in a clone of the production environment, making deliverables easily accessible, and providing visibility into the build results.

Benefits of CI include early detection of integration bugs, faster resolution of conflicts, reduced last-minute chaos during release dates, constant availability of a current build for testing and release purposes, discipline in automated testing, and software metrics for quality control. However, CI also comes with challenges such as constructing and maintaining an automated test suite, setting up a build system, and handling continuous integration with larger teams or projects containing untestable legacy code. Additionally, CI might not be suitable for safety-critical or mission-critical development that requires rigorous documentation and regulatory approval.

### Continuous Integration (CI)

- Focus: CI is primarily concerned with the integration of code changes made by multiple developers into a shared mainline or repository. It aims to merge code frequently to detect integration issues early and ensure that the changes can be integrated smoothly with the existing codebase.
- Automation: CI involves automating the build and testing process. Whenever a developer commits code changes to the repository, an automated build and a suite of tests are triggered to verify the integrity of the codebase.
- Frequency: CI encourages developers to integrate their code changes multiple times a day. This frequent integration helps to reduce the risk of conflicts and allows teams to identify and fix issues quickly.
- Scope: CI is limited to the development and testing phases. It ensures that the code is in a releasable state but does not necessarily mean that it is immediately deployed to production.

### Continuous Delivery (CD)

- Focus: CD extends the CI concept to focus on the entire software delivery process. It ensures that software changes are continuously ready for deployment to production by automating the entire delivery pipeline, including testing, deployment, and release activities.
- Automation: CD not only automates the build and testing stages (like CI) but also automates the deployment process. This automation allows for reliable and repeatable releases to production environments.
- Frequency: While CI encourages frequent integration, CD enables continuous, automated delivery of changes to production-like environments. However, it does not necessarily mean that every change is deployed to production immediately.
- Scope: CD covers the entire software delivery lifecycle, including integration, testing, and deployment. It aims to make the release process more efficient, reducing the time between code changes and their availability to end-users.

In summary, CI focuses on integrating code changes frequently to detect integration issues early, while CD extends CI by automating the entire delivery process to ensure that software changes are continuously ready for deployment. CI and CD are complementary practices that work together to improve software development efficiency, reduce risks, and enable rapid and reliable delivery of software to end-users.
