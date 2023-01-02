import React, { forwardRef } from "react";
import './loadingSection.css'

const LoadingSection = () => {
    function solution(people) {
        const indexing = new Set(people);
        const indexingArr = [...indexing];
    
        const map = new Map();
          
        indexingArr.map(id => {
            let cnt = 0;
            people.map(man => {      
                if(man === id){    
                    map.set(id, ++cnt);
                }
            })        
        });
    
        const iterator = map[Symbol.iterator]();
    
        var answer = [];
        for (const [key, value] of iterator) {
            if(value > 3){
                for(let i = 0; i<value;i+3){
                    answer.push(key)
                }
            }
        }
        
        return answer;
    }
    
    return (
        <div className="loading-section">
            <div className="loading-section__cover">
                <div className="loading-section__bg">
                    <div className="loading-section__bg-left"/>
                    <div className="loading-section__bg-right"/>
                </div>
                <div className="loading-section__inner">
                    <p>로딩중</p>
                </div>
            </div>
        </div>
    )
}

export default LoadingSection