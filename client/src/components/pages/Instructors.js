import React, {Component} from "react";
import {Grid, Row, Col, Image} from 'react-bootstrap';
import Header from "./Header";
import Footer from "./Footer";
import './About.css';
class Instructors extends Component {
render() {
  return (

    <Grid>
      
      <Row className="boxline" xs={12} sm={12} md={12} lg={12}>
         <Header />
      </Row>  
  <div>
    <center><u><h1>Instructors</h1></u> </center>
    <hr />
    <br /> <br />
     <Row className="show=grid  ">
        <Col xs={3} sm={3} md={3} lg={4} className="person-wrapper">
        <Image src="/SenseiSwain.jpg" circle className="swain-profile-pic" />
        </Col>
        <Col xs={9} sm={9} md={9} lg={8} >
        <h3><b> Gary Swain </b></h3> 
        <p>
            Chief Instructor Gary Swain teaches all classes. Gary started his martial arts training in 1973.
            His instructor is <b>Master Yutaka Yaguchi</b>, with whom he has been training for almost 44 years.
            Gary has had the privilege of training with many of the world famous Masters.  
            <br/>  These includes: <br />
            <b><center>Master Nakayama, Master Okazaki, Masters Tanaka, Osaka, Shiina, Ochi, Miura, Kanazawa, Okamoto, Takashina, Koyama and Mikami.</center></b>
            <br /> 
            <b>His accomplishments include: </b><br />
            <ul>
              <li> 8th Dan ISKF </li>
              <li> Certified Graduate of the ISKF Instructor Training Course </li>
              <li> Member -ShihanKai (Master Committee) </li>
              <li> Former - ISKF Technical Committee Member </li>
              <li> Former - Chairman-Mt. States Technical Committee </li>
              <li> Former - Regional Director- MT. States Region-ISKF </li>
            </ul>
            <br />
                Gary has been teaching and training children and adults in the Denver Metro area since 1987.
        </p>
      </Col>
  </Row>

  <hr />
  <Row className="show=grid ">
    <Col xs={3} sm={3} md={3} lg={4} className="person-wrapper">
      <Image src="/SenseiIrene.png" circle className="swain-profile-pic" />
    </Col>
    <Col xs={9} sm={9} md={9} lg={8} >
    <br />
        <h3><b>Irene Bowden </b> </h3>
    <br />
    <p>
    Irene Bowden started her training with <b>Sensei Swain </b> back in 2001.  She also trained consecutively with <b>ShihanYutaka Yaguchi </b> for several years and is a graduate of the Instructor Training Program under the guidance of him and Sensei Swain.  Irene started her own sister dojo in January, 2017 and teaches Special Needs, Youth Karate and Women’s Self-Defense classes at the neighboring Lone Tree Hub.  Irene continues to help Sensei Swain with the administrative needs and teaching at the Lone Tree dojo and also continues her training with her Sensei as well. 
    </p>
    <br /> 
    <p><b>Her accomplishments include: </b>
      <ul>
        <li> Assistant Instructor </li>
        <li> Administrative Assistant to Sensei Swain </li>
        <li> 16 years experience </li>
        <li> 4th Degree Black Belt </li>
        <li> Certified Grad. ISKF Training Program </li>
        <li> Certified Examiner and Judge </li>
        <li> Chief Instructor I.S.K.F. SKC, LLC. Located at the Lone Tree Hub </li>
        <li> ISKF Marketing Committee Member </li>
        <li> 4th Dan ISKF </li>
        <li> ISKF Certified Instructor </li>
        <li> Examiner and Judge </li>
    </ul>
    </p>
    </Col>
</Row>
<hr />

<Row className="show=grid ">
      <Col xs={3} sm={3} md={3} lg={4} className="person-wrapper">
          <Image src="/Hy.webp" circle className="swain-profile-pic" />
      </Col>
      <Col xs={9} sm={9} md={9} lg={8}>
        <h3><b>Hy Dreksler</b></h3>
        <p>
            Hy Dreskler assists Sensei Swain in the Monday and Wednesday youth classes.  
            Hy also assists classes for the Denver based classes.  Hy also continues to 
            train a few times each week in his mid eighties. Hy started his training in New York in 1973.
        </p>
    <br /> 
    <p>
        <b> His accomplishments include: </b>
        <ul>
            <li> Senior Class Assistant </li>
            <li> 44 years experience </li>
            <li> 5th Degree Black Belt </li>
            <li ><b style ={{color: 'red'}} >Instructor Trainee</b></li> 
        </ul>  
    </p> 
    <br />
  </Col>
</Row>
<hr />
<Row className="show=grid ">
        <Col xs={3} sm={3} md={3} lg={4} className="person-wrapper">
        <Image src="/Maria.jpg" circle className="swain-profile-pic" />
        </Col>
        <Col xs={9} sm={9} md={9} lg={8} > 
            <h3><b>Maria Mullen</b></h3>
            <br /> 
            <p>
                Maria Mullen started her training with Sensei Swain in 2001.  Maria currently assists Sensei Swain
                in his Tuesday youth classes.  Maria still enjoy competing in the tournaments and recently joined
                the Instructor Trainee Class.
            <br />
            <br />
            <b> Her accompishments include: </b>
            <ul>
               <li> Class Assistant </li>
               <li> 15 years experience </li>
               <li> 3rd Degree Black Belt </li>
               <li> <b style ={{color: 'red'}}> Instructor Trainee</b></li>
            </ul>
             </p>
        </Col>
</Row>

<hr />
<Row className="show=grid ">
        <Col xs={3} sm={3} md={3} lg={4} className="person-wrapper">
        <Image src="/Phil.jpg" circle className="swain-profile-pic" />
        </Col>
        <Col xs={9} sm={9} md={9} lg={8} >
            <h3><b>Phillip (Phil) Murray</b></h3>
            <ul>
               <li> Class Assistant </li>
               <li> 15 years experience </li>
               <li> 3rd Degree Black Belt </li>
               <li> <b style ={{color: 'red'}}> Instructor Trainee</b></li>
            </ul>
        </Col>
</Row>

  <br /> <br /> <br />
  </div>
  <Row className="boxline" xs={12} sm={12} md={12} lg={12}>
     <Footer />
   </Row> 
</Grid>
  );
}
}
export default Instructors;