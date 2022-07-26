import React from 'react'

export default function About(props) {
    // const [mySty, setmySty] = useState({
    //     color: 'black',
    //     backgroundColor: 'white',
    // });

    let mySty = {
        color : props.mode === 'dark' ? 'white' : 'black',
        backgroundColor : props.mode === 'dark' ? '#353535' : 'white'
    }

    return (
        <>
            <div className="container py-3" style={mySty}>
                <h2>About Us</h2>
                <div class="accordion" id="accordionExample">
                    <div class="accordion-item" style={mySty}>
                        <h2 class="accordion-header" id="headingOne">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={mySty}>
                                <strong>Analyze Your Text</strong>
                            </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                We offer you a quick and efficient way to analyze your text via Textin.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item" style={mySty}>
                        <h2 class="accordion-header" id="headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={mySty}>
                            <strong>Free to Use</strong>
                            </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                Textin is free character tool that provides instant character count and word count statistics for the given text. Textin reports the number word and characters. This is suitable for writting text with word/character limit.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item" style={mySty}>
                        <h2 class="accordion-header" id="headingThree">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={mySty}>
                                <strong>Browser Compatible</strong>
                            </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                The word counter software works in all popular web browsers, such as Chrome, Firefox, Internet Explorer, Safari and Opera. The generic character would suit ciunt's needs for a facebook post, a blog post, an excel document, a PDF document, etc.
                            </div>
                        </div>
                    </div>
                </div>
                {/* <button className="btn btn-dark my-3" onClick={toggleClsaa} style={btnSty}>{btnTxt}</button> */}
            </div>
        </>
    )
}
