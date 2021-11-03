import React, {useRef} from 'react'

import '../dropdown/dropdown.css'

const clickOutsideRef = (content_ref, toggle_ref)=>{
    document.addEventListener('mousedown',(e)=>{
        if(toggle_ref.current && toggle_ref.current.contains(e.target)){
            content_ref.current.classList.toggle('active')
            //investigar
        }else{
            if(content_ref.current && !content_ref.current.contains(e.target)){
                content_ref.current.classList.remove('active')
            }
        }
    })
}

const DropDown = props=> {

    const dropdown_toggle_el = useRef(null)
    const dropdown_content_el = useRef(null)

    clickOutsideRef(dropdown_content_el, dropdown_toggle_el)

    return (
        <div className='dropdown'>
            <button className="dropdown__toggle" ref={dropdown_toggle_el}>
                {
                    props.icon ? <i className={props.icon}></i> : ''
                }
                {
                    props.badge ? <span className='dropdown__toggle-badge'>{props.badge}</span>: ''
                }
                {
                    props.customToggle ? props.customToggle() : ''
                }
            </button>
            <div ref={dropdown_content_el} className="dropdown__content">
                {
                    props.contentData && props.renderItems ? props.contentData.map((item,index)=> props.renderItems(item, index)) : ''
                }
                {
                    props.renderFooter ? (
                        <div className="dropdown__footer">
                            {props.renderFooter()}
                        </div>
                    ) : ''
                }
            </div>
        </div>
    )
}

export default DropDown
