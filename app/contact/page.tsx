import MainLayout from "@/components/layouts/MainLayout";
import siteMetadata from "@/content/siteMetadata";
import { FaMapPin, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";

export default function Contact() {

return (
    <main className="grainy-header min-h-screen mt-11 mx-auto items-center align-center w-full">
      <MainLayout>
        <div className="flex flex-auto w-full py-4 px-4">
            <div className="w-full">
              <form id="submit-form" className="custom-form" action="https://formspree.io/f/mbjvelbj" method="POST">
                    <p className=""> My name is
                      <input id="name" className="w-full block text-white bg-black rounded-lg" name="name" required/>
                    </p> <br></br>
                    <p> My email is
                      <input id="email" className="w-full block text-white bg-black rounded-lg" name="email" required/>
                    </p> <br></br>
                    <p> My number is
                      <input id="company-name" className="w-full block text-white bg-black rounded-lg"  name="number" required/>
                    </p> <br></br>
                    <p> I'd Like to talk about
                      <textarea id="message" className="w-full block text-white bg-black rounded-lg" name="message" required></textarea>
                    </p> <br></br>
                      <button className="send-button button" type="submit">Send</button>
              </form>
            </div>
            <div className="text-center">
              <h1 className="text-4xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">Let's Talk!</h1>
                <ul className="flex flex-col items-center justify-center text-center">
                  <li className="flex items-center">
                    <b rel="noreferrer" className="flex items-center font-normal">
                      <FaTelegramPlane className="sm:text-4xl hover:fill-icons-email icons" />
                      <b className="font-semibold mx-auto">Email: </b> guilhermeharfy@gmail.com
                    </b>
                  </li>
                  <li>
                    <b rel="noreferrer" className="flex items-center font-normal">
                      <FaMapPin className="sm:text-4xl hover:fill-icons-pin icons" />
                      <b className="font-semibold mx-auto">Address: </b> Campo Grande MS - Brazil
                    </b>
                  </li>

                  <li>
                    <b rel="noreferrer" className="flex items-center font-normal">
                      <FaWhatsapp className="sm:text-4xl hover:fill-icons-whatsapp icons" />
                      <b className="font-semibold">Whatsapp:</b>Text me clicking: <a href={siteMetadata.whatsapp} className="font-semibold mx-auto cursor-pointer underlineOpen">HERE</a>
                    </b>
                  </li>
                </ul> 
              <img
                alt="World map"
                height={500}
                width={750}
                src={'/static/images/world.svg' || ''}
                className="rounded-t-lg object-scale-down"
              />
            </div>
        </div>
      </MainLayout>
    </main>
  );
}