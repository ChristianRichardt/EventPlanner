import React from 'react';
import ReactDOM from 'react-dom/client';
import Draggable from "react-draggable";
import './main.css';
import './styleJS.css';

class panelData{
    constructor(title, planner, task){
        this.title = title;
        this.planner = planner;
        this.task = task;
    }
}
const topPanel = document.getElementById("topPanel");
const panels = [];

function TopPanel(){
    const createPanel = () => {
        const newPanel = () => {

            
            const panelContainer = document.getElementById("panelContainer");
            const root = ReactDOM.createRoot(panelContainer);
            const title = document.getElementById("title").value;
            const planner = document.getElementById("planner").value;
            const task = document.getElementById("task").value;
            panels.push(new panelData(title, planner, task));

            root.render(
                <Draggable>
                    <div class="DraggableNoEvents">
                        {panels.map((item) => (
                            
                        ))}
                    </div>
                </Draggable>
            )
        }

        const creationPanel = document.getElementById("creationPanel");
        const root = ReactDOM.createRoot(creationPanel);
        const markup = 
        <Draggable>
            <div>
                <fieldset class="CreationPanel">
                    <legend>Skapa en ny panel</legend>
                    <label>Titel
                        <input type="text" name="title" id="title"/>
                    </label>
                    <label>Planerare
                        <input type="text" name="planner" id="planner"/>
                    </label>
                    <label>Uppgift
                        <input type="text" name="task" id="task"/>
                    </label>
                    <button type="button" name="Skapa" onClick={newPanel}>Skapa!</button>
                </fieldset>
            </div>
        </Draggable>;
        root.render(markup);
    }
    const editPanel = () => {
        console.log("Panel edited")
    }
    const removePanel = () => {
        console.log("Panel removed")
    }
    return(
        <span class="CenterButtons">
            <div class="Dividers"></div>
            <i class="fa-solid fa-plus fa-2x" onClick={createPanel}></i>
            <div class="Dividers"></div>
            <i class="fa-solid fa-pen-to-square fa-2x" onClick={editPanel}></i>
            <div class="Dividers"></div>
            <i class="fa-solid fa-trash fa-2x" onClick={removePanel}></i>
            <div class="Dividers"></div>
        </span>
    );
}

const root = ReactDOM.createRoot(topPanel)
root.render(<TopPanel />)