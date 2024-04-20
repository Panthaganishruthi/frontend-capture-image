import { useEffect, useRef, useState } from "react";
import Webcam from 'react-webcam'
import {txtDb} from '../firebase.js'
import { addDoc, collection, getDocs } from "firebase/firestore";
import ImgCard from "../components/ImgCard.jsx";

const Home = () => {

    const webcamRef = useRef(null);

    const [url, setUrl] = useState([]);

    const [ipAdd, setIpAdd] = useState(null);
    
    const capture = async () => {
        const imageSrc = webcamRef.current.getScreenshot();
        const valRef = collection(txtDb, 'txtData')
        try {
            const response = await fetch(`http://ip-api.com/json/${ipAdd}`);
            const data = await response.json();
            await addDoc(valRef, {txtVal: imageSrc, geoLocation: data})
        } catch(error){
            console.error('Failed to get Location info: ', error);
        }
    }

    const getData = async () => {
        const valRef = collection(txtDb, 'txtData')
        const dataDb = await getDocs(valRef);
        const allData = dataDb.docs.map(val => ({...val._document.data, id:val.id}))
        setUrl(allData);
    }

    const getvisitorIp = async () => {
        try{
            const response = await fetch('https://api.ipify.org/');
            const data = await response.text();
            setIpAdd(data);
        } catch(error) {
            console.error('Failed to fetch IP: ', error);
        }
    }

    useEffect(() => {
        getData()
        getvisitorIp()
    })

    return (
      <div className="home-contianer">
        <Webcam
          audio={false}
          height={320}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={480}
          mirrored={true}
        />
        <button onClick={capture}>Capture photo</button>
        <div className="gallary-container">
            {
                url.map((val, index) => (
                    <ImgCard key={index} details={val}/>
                ))
            }
        </div>
      </div>
    );
  };

  export default Home