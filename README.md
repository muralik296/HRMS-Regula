**Not for general public use**

**Stack: Node.js, Express, HTML5/CSS, jQuery, MongoDB**

**Please note the entire codebase is not posted here directly for security and privacy reasons**

**Below you can find the application explained in its entirety**

The interactive custom web application is built for the Human Resources Department. The application works alongside the [70x4m Regula Document Scanner](https://regulaforensics.com/en/products/machine_verification/70x4m/).
It makes use of the [Regula Document Reader SDK] (https://software.regulaforensics.com/software/Regula%20Downloads%20manager.exe) for the image processing and collection of data post processing.

The full SDK (Full) consists of three modules:

- Basic – supplied together with a device by default
- VizOCR – reading textual fields from a document page
- AAC – automatic authenticity control
- RFID - RFID Chip Detection

The device allows capturing images in white, infrared, ultraviolet and coaxial lights. Certain models are equipped with modules for reading RFID chips and smart cards. 

Integration of the SDK to end-user current system such as a Human Capital Management System such as Oracle Fusion.

The home page allows user to scan the identitfication documents such as ID Card, Pan Card, Aadhar , Visa , Passport etc.

In the below example, it is of a passport:

![1](https://user-images.githubusercontent.com/79444187/170065036-049ef8fa-a0eb-40c4-95c0-4f88ee889208.png)


![2](https://user-images.githubusercontent.com/79444187/170065065-297e05c7-68bd-4ad4-a8a0-aa57150b4c77.png)


The Regula Web Service runs on the browser of the end-user system , using the REST API services to parse and display the information to the user. The Regula Engine is capable of displaying the authenticity of the document being scanned as well.

It allows user to give the Name and Employee ID for the employee and save the record to the common database. Post the saving, it saves the scanned documents along with other graphic images captured from the scan to a network shared folder in the network.

Below is the screenshot for after saving the record to the database to view all the records :

![3](https://user-images.githubusercontent.com/79444187/170066820-815ffaa3-5bb5-447f-8c9c-94df30b5c98e.png)

It allows user to filter the data based on a given date range, and based on the document class such as Passport, Identification Card, Visa etc. 

![4](https://user-images.githubusercontent.com/79444187/170068973-6af806dd-f65f-46c4-9340-9dd194602d02.png)

Below screenshot for any editing or updations at a later time.

![5](https://user-images.githubusercontent.com/79444187/170066992-27cfe631-a8fa-44c8-8639-32fa947e52b2.png)












  
