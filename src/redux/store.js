import { createStore } from 'redux';
import rootReducer from './reducers';
import { setProducts } from './actions/productActions';


import image1 from '../Images/image 1.png';
import image2 from '../Images/image 2.png';
import image3 from '../Images/image 3.png';
import image4 from '../Images/image 4.png';
import image5 from '../Images/image 5.png';
import image6 from '../Images/image 6.png';
import image7 from '../Images/image 7.png';
import image8 from '../Images/image 8.png';
import image9 from '../Images/image 9.png';
import image10 from '../Images/image 10.png';
import image11 from '../Images/image 11.png';
import image12 from '../Images/image 12.png';
import image13 from '../Images/image 13.png';
import image14 from '../Images/image 14.png';

import image15 from '../Images/image 15.png';
import image16 from '../Images/image 16.png';
import image17 from '../Images/image 17.png';
import image18 from '../Images/image 18.png';
import image19 from '../Images/image 19.png';

const store = createStore(rootReducer);



const initialProducts = [
      
    { id: 1, name: 'Tree 1', image: image1 , description: 'Three Leaf Clover', water: 'Allow the soil to dry out completely before watering.', light: 'Bright indirect light environments', tips: 'Gently insert a toothpick into the soil to determine if your plant needs watering.',desc:'A caudiciform plant with reddish and green leaves. Interestingly, the leaves fold up in pairs during the evening. Keep away from children and pets.Plants images depicted are solely for illustration purposes only' },
    { id: 2, name: 'Plant 2', image: image2, description: 'A beautiful plant', water: 'Water regularly', light: 'Indirect sunlight', tips: 'Avoid overwatering.',desc:'A caudiciform plant with reddish and green leaves. Interestingly, the leaves fold up in pairs during the evening. Keep away from children and pets.Plants images depicted are solely for illustration purposes only' },
    { id: 3, name: 'Tree 3', image: image3, description: 'Another Clover', water: 'Same as others', light: 'Bright light', tips: 'Check soil regularly.',desc:'A caudiciform plant with reddish and green leaves. Interestingly, the leaves fold up in pairs during the evening. Keep away from children and pets.Plants images depicted are solely for illustration purposes only' },
    { id: 4, name: 'Plant 4', image: image4, description: 'Another Plant', water: 'Water daily', light: 'Low light', tips: 'Do not overwater.',desc:'A caudiciform plant with reddish and green leaves. Interestingly, the leaves fold up in pairs during the evening. Keep away from children and pets.Plants images depicted are solely for illustration purposes only' },
    { id: 5, name: 'Tree 5', image: image5, description: 'Yet Another Clover', water: 'Allow to dry', light: 'Indirect light', tips: 'Monitor closely.',desc:'A caudiciform plant with reddish and green leaves. Interestingly, the leaves fold up in pairs during the evening. Keep away from children and pets.Plants images depicted are solely for illustration purposes only' },
    { id: 6, name: 'Plant 6', image: image6 , description: 'New Plant', water: 'Regular watering', light: 'Moderate light', tips: 'Ensure proper drainage.',desc:'A caudiciform plant with reddish and green leaves. Interestingly, the leaves fold up in pairs during the evening. Keep away from children and pets.Plants images depicted are solely for illustration purposes only' },
    { id: 7, name: 'Tree 7', image: image7 , description: 'Lucky Clover', water: 'Moderate watering', light: 'Bright light', tips: 'Water when soil is dry.',desc:'A caudiciform plant with reddish and green leaves. Interestingly, the leaves fold up in pairs during the evening. Keep away from children and pets.Plants images depicted are solely for illustration purposes only' },
    { id: 8, name: 'Plant 8', image: image8 , description: 'Beautiful Plant', water: 'Frequent watering', light: 'Low light', tips: 'Keep away from direct sunlight.',desc:'A caudiciform plant with reddish and green leaves. Interestingly, the leaves fold up in pairs during the evening. Keep away from children and pets.Plants images depicted are solely for illustration purposes only' },
    { id: 9, name: 'Tree 9', image: image9 , description: 'Unique Clover', water: 'Sparse watering', light: 'Indirect light', tips: 'Avoid overwatering.' ,desc:'A caudiciform plant with reddish and green leaves. Interestingly, the leaves fold up in pairs during the evening. Keep away from children and pets.Plants images depicted are solely for illustration purposes only'},
    { id: 10, name: 'Plant 10', image: image10 , description: 'Stunning Plant', water: 'Regular watering', light: 'Moderate light', tips: 'Prune regularly.',desc:'A caudiciform plant with reddish and green leaves. Interestingly, the leaves fold up in pairs during the evening. Keep away from children and pets.Plants images depicted are solely for illustration purposes only' },
    { id: 11, name: 'Tree 11', image: image11 , description: 'Charming Clover', water: 'Moderate watering', light: 'Bright light', tips: 'Check soil moisture.',desc:'A caudiciform plant with reddish and green leaves. Interestingly, the leaves fold up in pairs during the evening. Keep away from children and pets.Plants images depicted are solely for illustration purposes only' },
    { id: 12, name: 'Plant 12', image:image12 , description: 'Attractive Plant', water: 'Frequent watering', light: 'Low light', tips: 'Avoid direct sunlight.',desc:'A caudiciform plant with reddish and green leaves. Interestingly, the leaves fold up in pairs during the evening. Keep away from children and pets.Plants images depicted are solely for illustration purposes only' },
    { id: 13, name: 'Tree 13', image: image13 , description: 'Elegant Clover', water: 'Sparse watering', light: 'Indirect light', tips: 'Do not overwater.' ,desc:'A caudiciform plant with reddish and green leaves. Interestingly, the leaves fold up in pairs during the evening. Keep away from children and pets.Plants images depicted are solely for illustration purposes only'},
    { id: 14, name: 'Plant 14', image: image14 , description: 'Lovely Plant', water: 'Regular watering', light: 'Moderate light', tips: 'Ensure good drainage.',desc:'A caudiciform plant with reddish and green leaves. Interestingly, the leaves fold up in pairs during the evening. Keep away from children and pets.Plants images depicted are solely for illustration purposes only' },
    { id: 15, name: 'Tree 15', image: image15 , description: 'Delightful Clover', water: 'Moderate watering', light: 'Bright light', tips: 'Water when dry.',desc:'A caudiciform plant with reddish and green leaves. Interestingly, the leaves fold up in pairs during the evening. Keep away from children and pets.Plants images depicted are solely for illustration purposes only' },
    { id: 16, name: 'Plant 16', image: image16 , description: 'Charming Plant', water: 'Frequent watering', light: 'Low light', tips: 'Keep away from sunlight.',desc:'A caudiciform plant with reddish and green leaves. Interestingly, the leaves fold up in pairs during the evening. Keep away from children and pets.Plants images depicted are solely for illustration purposes only' },
    { id: 17, name: 'Tree 17', image: image16 , description: 'Graceful Clover', water: 'Sparse watering', light: 'Indirect light', tips: 'Check moisture levels.',desc:'A caudiciform plant with reddish and green leaves. Interestingly, the leaves fold up in pairs during the evening. Keep away from children and pets.Plants images depicted are solely for illustration purposes only' },
    { id: 18, name: 'Plant 18', image: image17 , description: 'Attractive Plant', water: 'Regular watering', light: 'Moderate light', tips: 'Prune regularly.' ,desc:'A caudiciform plant with reddish and green leaves. Interestingly, the leaves fold up in pairs during the evening. Keep away from children and pets.Plants images depicted are solely for illustration purposes only'},
    { id: 19, name: 'Tree 19', image: image18 , description: 'Lovely Clover', water: 'Moderate watering', light: 'Bright light', tips: 'Avoid overwatering.',desc:'A caudiciform plant with reddish and green leaves. Interestingly, the leaves fold up in pairs during the evening. Keep away from children and pets.Plants images depicted are solely for illustration purposes only' },
    { id: 19, name: 'Tree 19', image: image19 , description: 'Lovely Clover', water: 'Moderate watering', light: 'Bright light', tips: 'Avoid overwatering.',desc:'A caudiciform plant with reddish and green leaves. Interestingly, the leaves fold up in pairs during the evening. Keep away from children and pets.Plants images depicted are solely for illustration purposes only' },
   
    // Add other products similarly
];

store.dispatch(setProducts(initialProducts));

export default store;
