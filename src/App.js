import React from 'react';
import Checkbox from './components/Checkbox';
import './App.css';

function App() {
    const [question, setQuestion] = React.useState({
        label: 'Question 1',
        check: false,
    });

    const handleQuestionChange = check => {
        setQuestion({ ...question, check: check });
    };

    React.useEffect(() => {
        console.log(question);
    }, [question]);

    return (
        <div className="App">
            <header className="App-header">
                <Checkbox label={question.label} check={question.check} onCheck={handleQuestionChange} />
            </header>
        </div>
    );
}

export default App;
