import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";

import Services from "./components/services";
import AppointmentCard from "./components/appointmentcard";
import { Grid, GridColumn } from "semantic-ui-react";
import Profile from "./components/profile";
import FAQS from "./components/faq";
import useCheckMobileScreen from "./components/checkmobile";
import AboutSection from "./components/about";
import "./index.css";
import Navbar from "./components/navbar";
import Review from "./components/Revew";
import ContactInfo from "./components/constact";
import { Helmet } from "react-helmet";
import Footer from "./components/footer";
import BottomBar from "./components/bottombar";
const App = () => {
  const stimeTable = {
    Monday: "10:00 am to 3:00 pm",
    Tuesday: "10:00 am to 3:00 pm",
    Wednesday: "10:00 am to 3:00 pm",
    Thursday: "10:00 am to 3:00 pm",
    Friday: "10:00 am to 3:00 pm",
    Saturday: "10:00 am to 3:00 pm",
  };
  const atimeTable = {
    Monday: "3:00 pm to 6:00 pm",
    Tuesday: "3:00 pm to 6:00 pm",
    Wednesday: "3:00 pm to 6:00 pm",
    Thursday: "3:00 pm to 6:00 pm",
    Friday: "3:00 pm to 6:00 pm",
    Saturday: "3:00 pm to 6:00 pm",
  };

  return (
    <>
      <Helmet>
        <title>Dr. Muhammd Usman Javaid-Consultant Nephrologist</title>
        <meta
          name="description"
          content="Dr. Muhammad Usman Javaid is a very well regarded Nephrologist and has a number of certifications under his belt, including MBBS and MD (Nephrology) as well as 10 years of experience in his field."
        />
        <meta
          name="keywords"
          content="Nephrologist, Nephrolgist, Kidney Biopsy, Kidney Stone, Nephrotic Syndrome"
        />
      </Helmet>
      {useCheckMobileScreen() ? (
        <>
          <Grid columns={1} stackable container>
            <GridColumn>
              <Profile />
              <AboutSection />
              <AppointmentCard
                title="Central Hospital (Sargodha)"
                fee="1000"
                location="101 stadium road , Sargodha"
                timetable={stimeTable}
              />
              <AppointmentCard
                title="Ashraf Medical Center"
                fee="1000"
                location="Qainchi Mor, NH 60, Sargodha"
                timetable={atimeTable}
              />
              <Services />
              <FAQS />
              <Review />
              <ContactInfo />
            </GridColumn>
          </Grid>
        </>
      ) : (
        <>
          <Navbar />
          <Grid columns={2} stackable container>
            <GridColumn largeScreen={11}>
              <Profile />
              <AboutSection />
              <Services />
              <FAQS />
              <Review />
            </GridColumn>
            <GridColumn largeScreen={5}>
              <AppointmentCard
                title="Central Hospital (Sargodha)"
                fee="1000"
                location="110 stadium road , Sargodha"
                timetable={stimeTable}
              />
              <AppointmentCard
                title="Ashraf Medical Center"
                fee="1000"
                location="Qainchi Mor, NH 60, Sargodha"
                timetable={atimeTable}
              />
              <ContactInfo />
            </GridColumn>
          </Grid>
        </>
      )}
      <Footer />
      {useCheckMobileScreen() ? <BottomBar /> : ""}
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
