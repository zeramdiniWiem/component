import React from "react";
import profile from "./profile.jpg"
const ProfilePhoto= () => {
    return (<img style={{boxShadow:'6px 6px 0px gray', borderRadius:'5px', }} src={profile} alt ='my profile picture' />
    );
}
export default ProfilePhoto;

