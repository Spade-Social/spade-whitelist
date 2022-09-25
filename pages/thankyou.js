import Error from "../components/Error";
import Greeting from "../components/Greeting";
import sanityClient from "@sanity/client"
import Head from "next/head";
import emailjs from "emailjs-com";

export default function ThankYou({ status, code, email }) {
    console.log(code)
    console.log(status)
    console.log(email)
    function sendKey() {
        const form = document.createElement("form")
        const input = document.createElement("input")
        const emailForm = document.createElement("input")
        input.setAttribute("type", "text")
        input.setAttribute("name", "key")
        input.setAttribute("value", code)
        emailForm.setAttribute("type", "email")
        emailForm.setAttribute("name", "email")
        emailForm.setAttribute("value", email)
        form.appendChild(input)
        form.appendChild(emailForm)
        emailjs.sendForm('service_zmr15d3', 'template_7y3dact', form, 'hadEOpMkKVifHmg3u')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      }
      if (typeof document != "undefined" && status == true) {
        sendKey()
      }
    return(
        <div>
            <Head>
            <title>Spade Waitlist</title>
            <link rel="icon" href="/logo.png" />
            </Head>
            <main className="flex flex-col items-center justify-center w-full h-screen">
                {
                    status ? <Greeting code={code} /> : <Error />
                }
            </main>
        </div>
    )
}

export async function getServerSideProps(context) {
    const code = context?.query?.key || null
    const email = context?.query?.email || null
    var status = false
    const config = {
        dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
        projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
        useCdn: false,
        token: process.env.SANITY_API_TOKEN
    }
    const client = sanityClient(config)
    const query = `
        *[_type == "user" && activationKey == ${code} && email == "${email}"]{
            activationKey
        }
    `
    const result = await client.fetch(query)
    if (result.length != 0) {
        status = true
    }
    return {
      props: {
        code,
        status,
        email
      },
    }
}