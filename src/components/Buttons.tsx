import React, {FC, useState} from "react";
import { GoToMintingButtonStyle  } from "../styles/buttons.css";
import ReactiveButton, { buttonState } from 'reactive-button';
import { useHistory } from "react-router-dom";
import { useWallet } from "../context/walletContext";


export const ConnectWalletButton: FC = () => {  
  
    const history = useHistory();
    const [state, setState] = useState<buttonState>('idle');
    let { wallet, details, isConnected } = useWallet();

    const onClickHandler = () => {
        return !isConnected ?
        () => {
            //wallet?.connect({ requestSignIn: true });
            //window.location.reload();
            history.push("/minting");
        }
        :
        () => {
            wallet?.disconnect()
            window.location.reload()
        }
       
    }

     /**
         *    
         *  
         * setState('loading');
            setTimeout(() => {
            setState('success');
            history.push("/minting");
        }, 2000);
         */

    const buttonStyle: React.CSSProperties = { 
        borderRadius: '15px', 
        fontSize:'16px', 
        fontWeight:'bold', 
        color:'white', 
        background:'linear-gradient( 111.2deg,  rgba(232,5,5,1) 1.7%, rgba(245,49,191,1) 98.7% )'
    };

  return(
        <>  
        <div style={{ paddingRight:'30px', paddingBottom: '40px'}}>
            <ReactiveButton
                buttonState={state}
                idleText={'CONNECT WALLET'}
                loadingText={'CONNECTING...'}
                width={'14vw'}
                height={'6vh'}
                buttonRef={null}
                animation={true}
                onClick={
                    onClickHandler()
                }
                rounded={false}
                style={ buttonStyle }
                color={"violet"}
                type={'reset'}   
                block={true}
            />
        </div>
        </>
    )
}

export const GoToMintingButton: FC = () => {  
  
    const [state, setState] = useState<buttonState>('idle');

    const onClickHandler = () => {
        setState('loading');
        setTimeout(() => {
            setState('success');
        }, 2000);
    }

  return(
        <>  
        <div style={{ paddingRight:'30px', paddingBottom: '40px'}}>
            <GoToMintingButtonStyle onClick={onClickHandler}>
                <text style={{fontSize:'16px', color:'white', fontWeight:'bold'}}>
                    GO TO MINTING
                </text>
            </GoToMintingButtonStyle>
        </div>
        </>
    )
}

