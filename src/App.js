import React, {useContext, useState, useEffect, useMemo} from "react";
import './App.scss';
import ButtonColored from './components/buttonColored/buttonColored';
import ButtonBorder from "./components/buttonBorder/buttonBorder";
import Onboarding from "./components/onboarding/onboarding";
import TextInput from "./components/textInput/textInput";
import Image from "./image/image2.png"
import Image2 from "./image/slingers.png"
import ImageScoreBronze from "./image/scoreBronze.png"
import ImageScoreSilver from "./image/scoreSilver.png"
import ImageScoreGold from "./image/scoreGold.png"
import { Route, useHistory } from 'react-router-dom';
import Container from "./components/container/container";
import Question from "./components/question";
import {ApiContext} from "./apiContextProvider";
import Cards from "./components/cards/cards";
import ButtonBorderAgain from "./components/buttonBorderAgain/buttonBorderAgain";
import ButtonColoredAgain from "./components/buttonColoredAgain/buttonColoredAgain";

const App = () => {
    const history = useHistory();
    const { nierFalen } = useContext(ApiContext);
    const { copd } = useContext(ApiContext);
    const { diabetes } = useContext(ApiContext);

    //state = een soort variable die hij bij zich heeft waar je iets mee kan doen. Een stukje data in zijn eigen component
    const [name, setName] = useState("");
    const [score, setScore] = useState(0);
    const [count, setCount] = useState(1);
    const [disease, setDisease] = useState('');

    // const [randomQuestionArray, setRandomQuestionArray] = useState([]);

    const [, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);
    const [loading, setLoader] = useState(true);

    useEffect(() => {
        if (nierFalen.length > 0 && copd.length > 0 && diabetes.length > 0 ){
            setLoader(false);
        }
    }, [nierFalen, copd, diabetes]);

    useEffect(() => {
        if (count > 10) {
            history.push("/question/vraag-eindscherm");
        }
    }, [count]);

    const renderEndScreen = () => {
        if (score < 4){
            return <Cards backgroundBronze='backgroundBronze' scoreImage={ImageScoreBronze} score={score} name={name} title="Goed geprobeerd" question="Verassend he! Wij als dietisten kunnen meer voor jou betekenen dan je denkt. Wil je meer handige tips en  trucjes ontvangen? Plan dan een afspraak in met een van ons!"/>
        } else if(score >= 4 && score < 8){
            return <Cards backgroundBronze='backgroundSilver' scoreImage={ImageScoreSilver} score={score} name={name} title="Goed gedaan" question="Wat goed! Zo te zien heb jij al een prima beeld van wat wij als diëtisten doen. Wil je meer handige tips en  trucjes ontvangen? Plan dan een afspraak in met een van ons!"/>
        } else if(score => 8){
            return <Cards backgroundBronze='backgroundGold' scoreImage={ImageScoreGold} score={score} name={name} title="Goed gedaan" question="Wat goed! Zo te zien heb jij al een prima beeld van wat wij als diëtisten doen. Wil je meer handige tips en  trucjes ontvangen? Plan dan een afspraak in met een van ons!"/>
        }
    };

    if (!loading)
    return (
        <>
           <Route exact path='/' >
               <Container>
                   <Onboarding image={Image} title='Twijfel niet, maar kies voor een diëtist!' text='Moet jij jouw leefstijl veranderen, maar weet je niet hoe je dit moet aanpakken? Wellicht kunnen wij jou wel helpen.'/>
                   <ButtonColored text='Laten we beginnen!' link='naam' />
               </Container>
           </Route>
            <Route exact path='/question/vraag-naam' >
                <Container>
                    <div className="tekstOmhoog">
                        <h2>Voordat we beginnen, wat is je naam?</h2>
                        <TextInput placeholder='Typ hier je naam' setName={setName} />
                    </div>
                    <ButtonColored text='Ga verder' link='aandoening'/>
                </Container>
            </Route>
            <Route exact path='/question/vraag-aandoening' >
                <Container>
                    <h2>Welke aandoening is relevant voor jou?</h2>

                    <ButtonBorder text='Nierfalen' setDisease={setDisease} disease={disease}/>
                    <ButtonBorder text='Diabetes' setDisease={setDisease} disease={disease}/>
                    <ButtonBorder text='COPD' setDisease={setDisease} disease={disease}/>

                    <ButtonColored text='Laten we beginnen!' link={1}/>
                </Container>
            </Route>
           <Route exact path='/about' >
               <Container>
                   <div className="moreInfo">
                       <div className="tekstOmhoog">
                           <h1>Over het product</h1>
                           <p>Dit product is gemaakt als initatief van Dietisten Coöperatie Nederland (DCN). DCN is een landelijk netwerk van diëtisten in de eerste lijnsgezondheidszorg. Met dit product willen wij een beter beeld geven van wat wij als dietisten kunnen betekenen voor jou. </p>
                       </div>
                       <ButtonColored text='Terug naar vragen' link='1'/>
                   </div>
               </Container>
           </Route>
            <Route exact path='/contact' >
                <Container>
                    <div className="moreInfo">
                        <h1>Contactgegevens</h1>
                        <p>Een vraag of wil je meer weten? Neem dan gerust contact op!</p>
                        <p>Adres: <br></br>
                            Iroko 145, <br></br>
                            3315 PN Dordrecht <br></br>
                            <br></br>
                            Telefoon:<br></br>
                            (op werkdagen)<br></br>
                            024 200 5491<br></br>
                            <br></br>
                            E-mail:<br></br>
                            info@dcn.nu<br></br>
                            </p>
                        <ButtonColored text='Terug naar vragen' link='1'/>
                    </div>
                </Container>
            </Route>
            {disease === 'nierfalen' &&
                nierFalen.map((nierFalen) => {
                return (
                    <React.Fragment key={nierFalen.slug}>
                        <Route path={`/question/${nierFalen.slug}`}>
                            <Container>
                                <Question forceUpdate={forceUpdate} renderQuestion={count} count={count} setCount={setCount} nierFalen={nierFalen} score={score} setScore={setScore} />
                            </Container>
                        </Route>
                    </React.Fragment>
                );
                })
            }
            {disease === 'diabetes' &&
                diabetes.map((diabetes) => {
                    // console.log('asd', diabetes);
                return (
                    <React.Fragment key={diabetes.slug}>
                        <Route path={`/question/${diabetes.slug}`}>
                            <Container>
                                <Question forceUpdate={forceUpdate} renderQuestion={count} count={count} setCount={setCount} nierFalen={diabetes} score={score} setScore={setScore} />
                            </Container>
                        </Route>
                    </React.Fragment>
                );
                })
            }
            {disease === 'copd' &&
            copd.map((copd) => {
                // console.log('asd', copd);
                return (
                    <React.Fragment key={copd.slug}>
                        <Route path={`/question/${copd.slug}`}>
                            <Container>
                                <Question forceUpdate={forceUpdate} renderQuestion={count} count={count} setCount={setCount} nierFalen={copd} score={score} setScore={setScore} />
                            </Container>
                        </Route>
                    </React.Fragment>
                );
            })
            }
            <Route exact path='/question/vraag-eindscherm' >
                <Container>
                    {renderEndScreen()}
                    <ButtonColoredAgain text='Zoek een passende dietist'/>
                    <ButtonBorderAgain text='Opnieuw, met nieuwe vragen!'  link='vraag-aandoening' />
                    <div className="backgroundConfetti"><img src={Image2} alt="image1"/></div>
                </Container>
            </Route>
        </>
    );
    else return <div>.</div>
};

export default App;
