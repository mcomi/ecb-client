# EDC Task Client

This project uses TailwindCSS and React. For deploy I used the CD flow with Github + Netlify.

You can see the demo [right here.](https://confident-bhaskara-2bb730.netlify.app/)
For some reason I didn't find out the customers url is not working on Netlify but you can verify for new records directly at the API endpoint.

## Run the project

In the project directory, you can run:

### `yarn start`

This client connects to the backend at Heroku

It has two endpoints:

### GET https://ecb-task-api.herokuapp.com/api/customers

### POST https://ecb-task-api.herokuapp.com/api/customer

I had some problems for fetching the images, most of them returned NOT FOUND. As Netlify uses https I had to change the urls of the images to https but they are loading very slow and sometimes returning NOT FOUND so I used a fallback Image.
