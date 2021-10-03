## How to start

To open project please follow commands below

### `npm install`

Install all required node modules

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />

## App Description

To run application, you need to execute
- #### npm install
- #### npm start

After running npm start, it will run website on `localhost:3000` where you will be able to verify final effect of website. I prepared 3 views which are adjusted for 3 different breakpoint as displayed on screenshots below. To verify it in chrome you can press F12 and then you can resize website to verify how changes are looking on live website 

#### Full width

![image](https://user-images.githubusercontent.com/11311786/135771805-fed8b172-5221-415a-8c71-9940388356bc.png)

#### 1019px website width

![image](https://user-images.githubusercontent.com/11311786/135771811-84671d3b-4c05-43c6-9d25-74db9eaed915.png)

#### 600px website width

![image](https://user-images.githubusercontent.com/11311786/135771819-8437db63-25b3-4975-b5ea-e89bab281d80.png)


I arranged and split components between app specific like list and CarDetailsModal but as well tried to create elements which can be used in different places in the future like loading screen and modal. I set timeout for fetching data from api just to display loading logo but timeout can be removed what will speed up app testing but there is possibility that loading screen won’t be visible.

#### Testing

In terms of testing I would start from creating cosmos library with all possible elements and mock data to display all possible variants of each component where visually I would be able to test if all options works properly when all data passed are properly formatted. It is good just for visual testing where I can test each element in every possible value variant and in different screen sizes and observe how it behaves and if change of one parameter is not affecting not expected components

Another step would be testing components by rendering them in test file and comparing if rendered element is displaying data as expected in test.

Next I would create test which is comparing whole component HTML rendered with expected HTML which is generated at properly working page and then is compared in unit test if rendered object HTML is exactly the same. This option is slightly different comparing to the previous test because previously we compared jus value in specific places but here it will compare whole component generated HTML code.

