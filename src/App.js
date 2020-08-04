import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

const App = () => {

  const [questionOne, setAnswerOne] = useState([]);
  const [questionTwo, setAnswerTwo] = useState([]);
  const [questionThree, setAnswerThree] = useState([]);
  const [questionFour, setAnswerFour] = useState([]);
  const [questionFive, setAnswerFive] = useState([]);
  const [questionSix, setAnswerSix] = useState([]);
  const [questionSeven, setAnswerSeven] = useState([]);

  const fetchData = () => {
    const questionAPI = 'http://anapioficeandfire.com/api/characters/16';
    const questionAPI2 = 'http://www.anapioficeandfire.com/api/houses/378';
    const questionAPI3 = 'http://www.anapioficeandfire.com/api/houses/229';
    const questionAPI4 = 'http://www.anapioficeandfire.com/api/houses/17';
    const questionAPI5 = 'http://www.anapioficeandfire.com/api/characters/901';
    const questionAPI6 = 'http://www.anapioficeandfire.com/api/houses/362';
    const questionAPI7 = 'http://www.anapioficeandfire.com/api/characters/232';

    const getAnswer = axios.get(questionAPI)
    const getAnswer2 = axios.get(questionAPI2)
    const getAnswer3 = axios.get(questionAPI3)
    const getAnswer4 = axios.get(questionAPI4)
    const getAnswer5 = axios.get(questionAPI5)
    const getAnswer6 = axios.get(questionAPI6)
    const getAnswer7 = axios.get(questionAPI7)

    axios.all([getAnswer, getAnswer2, getAnswer3, getAnswer4, getAnswer5, getAnswer6, getAnswer7])
    .then(
      axios.spread((...allData) => {
        const answerNumber1 = allData[0].data.born;
        const answerNumber2 = allData[1].data.region;
        const answerNumber3 = allData[2].data.coatOfArms;
        const answerNumber4 = allData[3].data.seats[1];
        const answerNumber5 = allData[4].data.aliases[2];
        const answerNumber6 = allData[5].data.founder;
        const answerNumber7 = allData[6].data.povBooks[[]];

        setAnswerOne(answerNumber1)
        setAnswerTwo(answerNumber2)
        setAnswerThree(answerNumber3)
        setAnswerFour(answerNumber4)
        setAnswerFive(answerNumber5)
        setAnswerSix(answerNumber6)
        setAnswerSeven(answerNumber7)
   

      })
    )
  }

  useEffect(() => {
    fetchData()
  }, [])




  return (
    <div className="App">
        <h1>The Answer to question one is: {questionOne} </h1>
        
        <h1>The Answer to question two is: {questionTwo} </h1>
        
        <h1>The Answer to question three is: {questionThree}</h1>
        
        <h1>The Answer to question four is: {questionFour}</h1>
        
        <h1>The Answer to question five is: {questionFive}</h1>
        
        <h1>The Answer to question six is: {questionSix}</h1>
        
        <h1>The Answer to question seven is: {questionSeven}</h1>
        
    </div>
  )
}

export default App;
