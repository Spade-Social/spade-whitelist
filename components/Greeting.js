import SpadeHead from "./SpadeHead";

export default function Greeting({ code }) {
    return(
        <div className="spade-y-5 max-w-sm">
          <div><SpadeHead /></div>
          <h1 className="text-lg text-center">Thank you for joining spade. Your activation key is <span className="font-bold">{code}</span>, with this code you are eligible to redeem a reward on the spade 
          mobile application.</h1>
        </div>
    )
}