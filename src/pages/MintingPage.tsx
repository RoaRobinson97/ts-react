import React, { FC } from "react";
import { PrivateHeader }  from "../components/Header"

const CreateNFT: FC = () => {
    return (
        <>
        <PrivateHeader/>
        <div style={{  backgroundImage: 'linear-gradient(to right, #0f2027, #5433ff, #1d2b64)', display:'flex', justifyContent:'center'}}>
            <div style={{display:'flex', flexDirection:'column', width:'80vh'}}>
                <h3 style={{color:'white', fontSize:'40px', marginTop:'30px'}}>Create Single Artwork</h3>
                <h4 style={{color:'white', fontSize:'24px', marginTop:'22px'}}>Upload Artwork</h4>
                <div id="uploadArea" className="upload-area-dark">
                    <div className="upload-area__header">
                        <p className="upload-area__paragraph">
                            <strong className="upload-area__tooltip">
                                <span className="upload-area__tooltip-data"></span>
                            </strong>
                        </p>
                    </div>
                    <div id="dropZoon" className="upload-area__drop-zoon drop-zoon">
                        <span className="drop-zoon__icon">
                            <svg className="upload-icon" width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.438 12.81L20 6.25l6.563 6.56M20 23.75V6.255M33.75 23.75v8.75a1.25 1.25 0 01-1.25 1.25h-25a1.25 1.25 0 01-1.25-1.25v-8.75" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>
                        </span>
                        <p style={{color:'white'}}className="desc body-sb">PNG, GIF, WEBP, MP4 or MP3. Max 2 GB.</p>
                        <p className="drop-zoon__paragraph btn-outline1">browse</p>
                        <span id="loadingText" className="drop-zoon__loading-text">Please Wait</span>
                        <input type="file" id="fileInput" className="drop-zoon__file-input" accept="image/*" />
                    </div>
                    <div id="fileDetails" className="upload-area__file-details file-details">
                        <h3 className="file-details__title">Uploaded File</h3>
                        <div id="uploadedFile" className="uploaded-file">
                            <div className="uploaded-file__icon-div">
                                <i className='bx bxs-file-blank uploaded-file__icon'></i>
                                <span className="uploaded-file__icon-text"></span>
                            </div>
                            <div id="uploadedFileInfo" className="uploaded-file__info">
                                <span className="uploaded-file__name">Project 1</span>
                                <span className="uploaded-file__counter">0%</span>
                            </div>
                        </div>
                    </div>
                </div>
                <h4 style={{color:'white', fontSize:'30px', marginBottom:'20px'}}>Artwork Details</h4>

                <h4 style={{color:'white', fontSize:'22px', marginBottom:'10px'}}>Name</h4>
                <input style={{width:'50%'}} className="input" type="text" name="name" placeholder="Artwork Name e.g. “Floating Ethoz”" required />
                
                <h4 style={{color:'white', fontSize:'22px', marginBottom:'10px', marginTop:'10px'}}>Description</h4>
                <textarea className="textarea input" name="disc" placeholder="Artwork Description e.g. “ Floating Ethoz 3D”" required></textarea>
                <select style={{marginTop:'20px', width:'30%'}} id="year">
                            <option className="linkk" value="hide">Select Royalties</option>
                            <option className="linkk" value="2010">UI Design</option>
                            <option className="linkk" value="2011">UI/UX</option>
                            <option className="linkk" value="2012">Web Development</option>
                            <option className="linkk" value="2013">UI/UX</option>
                </select>

                <h4 style={{color:'white', fontSize:'22px', marginTop:'10px'}}className="head-2 heading-h4">Properties</h4>
                <input style={{marginTop:'20px'}} className="input" type="text" name="size" placeholder="Propertie e.g. Size" required />
                <input style={{marginTop:'20px', marginBottom:'20px'}} className="input" type="text" name="text" placeholder="Propertie e.g. S" required />
                
                <label>
                    <span className="check-inner">
                        <input type="checkbox" className="input-check opacity-0 absolute" />
                    </span>
                    <span style={{color:'white', fontSize:'22px', marginLeft:'20px'}} className="select-none heading-h5">Put on Sale</span>
                </label>
                <p style={{color:'#bfbfbf', fontSize:'16px'}} className="desc body-m">You’ll start receiving bids on this artwork.</p>
                
                <label>
                    <span className="check-inner">
                        <input type="checkbox" className="input-check opacity-0 absolute" />
                    </span>
                    <span style={{color:'white', fontSize:'22px', marginTop:'10px', marginLeft:'20px'}} className="select-none heading-h5">Instant Sale Price</span>
                </label>
                <p style={{color:'#bfbfbf', fontSize:'16px'}} className="desc body-m">Enter a price for which your item will be sold instantly.</p>

                <div className="check">
                    <label>
                        <span className="check-inner unlock">
                            <input type="checkbox" className="input-check opacity-0 absolute" />
                        </span>
                        <span style={{color:'white', fontSize:'22px', marginTop:'10px', marginLeft:'20px'}} className="select-none heading-h5">Unlock Once Purchased</span>
                    </label>
                </div>
                <p style={{color:'#bfbfbf', fontSize:'16px'}} className="desc-2 body-m">Artwork will be unlocked after the purchase.</p>

                <div style={{marginTop:'20px'}} className="input-otr-2 unlock-input-otr">
                    <input className="input unlock-input-inr" type="text" placeholder="Digital Key, Code to Redeem or Link to a File" />
                </div>

                <div style={{marginTop:'20px', marginBottom:'50px', width:'30%'}} className="col-btn-inr">
                    <a href="" className="btn-fill btn-create">Create Artwork</a>
                </div>
            </div>
        </div>
        
        </>
    )
}

export default CreateNFT;