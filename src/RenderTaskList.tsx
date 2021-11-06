import React from 'react'

export default function RenderTaskList(props:any) {

    let arr = props.list;

    switch (props.filter) {
        case 'fin':
            const finFiltr = function finFiltr(): void{
                arr = arr.filter((statusArr : any) => statusArr.status === true);
            };
            finFiltr();
            break;

        case 'nfin':
            const NfinFiltr = function NfinFiltr(): void{
                arr = arr.filter((statusArr : any) => statusArr.status === false);
            };
            NfinFiltr();
            break;
    
        default:
            break;
    }

    return (
        <div id="TaskListArea">
            {
                arr.map((elem:any, key:any)=>{
                    if(elem.status === true){
                        return <div id="TaskListArea_child" key={elem.id}>
                            <input type="checkbox" defaultChecked={elem.status} onClick={()=>{props.DoTask([key,elem.id])}} />
                            < input type="text" className="activeCheck" defaultValue={elem.title}  readOnly />
                            <button type="button" id="activeCheck" onClick={()=>{
                                props.DeleteTask([key,elem.id]);
                            }}><img src="https://img.icons8.com/material-sharp/24/000000/trash.png" alt="bucket"/></button>
                        </div>;
                    }else{
                        return <div id="TaskListArea_child" key={elem.id}>
                            <input type="checkbox" defaultChecked={elem.status} onClick={()=>{props.DoTask([key,elem.id])}} />
                            < input type="text" defaultValue={elem.title}  readOnly />
                            <button id="deletTask_btn" type="button" onClick={()=>{
                                props.DeleteTask([key,elem.id]);
                            }}><img src="https://img.icons8.com/material-sharp/24/000000/trash.png" alt="bucket"/></button>
                        </div>;
                    }
                })
            }
        </div>
    )
}
