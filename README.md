# 💒 Ionic Angular Channels UI Page Application


# ✍️ About 
The Ionic Angular Channels UI Page Component is a robust and feature-rich component that provides a comprehensive user interface for managing channels and channel sections in an Ionic Angular application. It is designed to work in conjunction with a ChannelsDataBroker service, which handles data management and CRUD operations for channels and channel items.


# 🗺 Features
Channel Section Display: The component displays a list of channel sections, allowing users to view and interact with them.
Channel Item Management: Users can explore, edit, delete, and create channel items within each channel section.
Pagination and Infinite Scroll: The component supports pagination and infinite scroll functionality for efficient data rendering and navigation.
Swipe Refresh: Users can easily refresh the channel data by performing a swipe-down gesture.
Configurable UI: The component's user interface is highly configurable, allowing customization of various elements such as spinners, toasts, buttons, and browser targets.
CRUD Operations: The component facilitates Create, Read, Update, and Delete (CRUD) operations on channel sections and channel items.
Modal Integration: The component integrates with Ionic modals for displaying and managing channel editor pages.
Alert Dialogs: The component utilizes Ionic alert dialogs for confirmation prompts, such as deleting a channel section.
Permission Management: The component handles permissions for CRUD operations, ensuring proper access control for different user roles.
Event Handling: The component can handle various events related to channel and channel item actions, such as exploration and custom events.
Loader and Progress Indicators: The component provides loader and progress indicators to enhance the user experience during data loading and processing.
Reactive Programming: The component leverages reactive programming techniques, utilizing RxJS Observables and Subjects for efficient data handling and event management.


# 📺 Demo 
## Result
![Screenshot (2629)](https://user-images.githubusercontent.com/40228505/197374888-5f7a9987-9fea-4a5d-99f5-3b1b9402a2b1.png)


## Channels Action Sheet
![Screenshot (2495)](https://user-images.githubusercontent.com/40228505/197374562-984f0488-042e-4991-a2d7-51b14aa924e1.png)

## Channels Popover Options
![Screenshot (2492)](https://user-images.githubusercontent.com/40228505/197374625-30657667-5b5f-44d7-9122-ec50f616b58d.png)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.4.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### ng build output
![Screenshot (2247)](https://user-images.githubusercontent.com/40228505/197374818-2eab956e-6bb5-4c77-adee-c7d208735147.png)

## Link ionic library

_npm link_


## Some Error I encountered and How I solved them
#####SOLUTION:
* Refactor AfterViewInit lifecycle hook
* Use ChangeDetectorRef mannually
* Make getters idempotent
* Make the update async (last resort)
![Screenshot (2291)](https://user-images.githubusercontent.com/40228505/197375296-ef86e8d6-7b32-45e0-8e2b-79b1585c09b1.png)


### Error one
![Screenshot (2516)](https://user-images.githubusercontent.com/40228505/197375108-ed77c2a7-b15d-4f64-9470-bcb3e26bd64f.png)

###Error two
![Screenshot (2469)](https://user-images.githubusercontent.com/40228505/197375166-afdb4e6c-c8cb-4f10-93d5-3915e208b3f0.png)

###Error three
![Screenshot (2467)](https://user-images.githubusercontent.com/40228505/197375179-c3fb6f56-fde5-4a5d-ab6e-a6597542e363.png)



# 👨‍💻 Author 
[Akinro Olawale](https://github.com/lexycole)


# 🔖 Licence
The project is available under the [MIT License](https://github.com/lexycole/Soul-Meet-Universe/blob/main/LICENSE).
