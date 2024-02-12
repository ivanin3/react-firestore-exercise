import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const firebaseConfig = {
  apiKey: "AIzaSyDLIMqKiU78Hm6y3wr4BgIlk5ndSMfod0o",
  authDomain: "song-app-da8b5.firebaseapp.com",
  projectId: "song-app-da8b5",
  storageBucket: "song-app-da8b5.appspot.com",
  messagingSenderId: "564203151183",
  appId: "1:564203151183:web:aece9581cd83c51e2b6f3a",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const getSongs = async () => {
    const querySnapshot = await getDocs(collection(db, "songs"));

    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
    });
return doc.data();
}

export const HomePage = () => {

const { error } = useQuery({
    queryKey: ["songs"],
    queryFn: getSongs,
});

console.log(error);

    return (
        <div>
        <h1>HOLA</h1>
        <Outlet />
        </div>
    )
};