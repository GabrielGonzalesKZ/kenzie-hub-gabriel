import styled from "styled-components"

export const StyledRegister = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin: 0 auto;
    width: 100%;
    height: 100%;
    padding-bottom: 40px;

    h1{
        font-size: 25px;
        color: var(--color-primary);
    }

    .nav{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 411px;
        margin-top: 40px;
        align-items: center;
    }

    .nav button{
        padding: 0px 16px;
        width: 67px;
        height: 40px;
        background: var(--color-grey-3);
        border-radius: 4px;
        font-weight: 600;
        font-size: 12px;
        color: var(--color-grey-0);
        border-style:none;
        cursor: pointer;
    }

    .nav button:hover{
        background-color: var(--color-grey-2);
    }

    .form{
        background-color: var(--color-grey-3);
        display: flex;
        flex-direction: column;
        box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
        border-radius: 4px;
        width: 369px;
        padding: 20px 22px;
    }

    p{
        font-weight: 400;
        font-size: 12px;
        color: var(--color-grey-1);
        text-align: center;
    }

    h4{
        font-weight: 700;
        font-size: 18px;
        color: var(--color-grey-0);
        text-align: center;
    }

    form{
        display: flex;
        flex-direction: column;
        gap: 22px;
    }

    label{
        font-weight: 400;
        font-size: 12px;
        color: var(--color-grey-0);
    }

    input{
        padding: 0px 16px;
        height: 48px;
        background: var(--color-grey-2);
        border: 1.2182px solid var(--color-grey-3);
        border-radius: 4px;
        font-weight: 400;
        font-size: 16.2426px;
        color: var(--color-grey-1);
    }

    form button {
        padding: 0px 22px;
        height: 48px;
        background: var(--color-primary);
        border: 1.2182px solid var(--color-primary);
        border-radius: 4px;
        font-weight: 500;
        font-size: 16px;
        color: var(--color-grey-0);
        cursor: pointer;
    }

    form button:hover{
        background: #FF427F;
        border: 1.2182px solid #FF427F
    }

    span{
        text-align: center;
        padding-top: 25px;
        padding-bottom: 15px;
    }

    a{
        font-weight: 600;
        font-size: 12px;
        text-decoration: none;
        color: var(--color-grey-1);
    }

    button{
        padding: 0px 22px;
        height: 48px;
        background: var(--color-grey-1);
        border: 1.2182px solid var(--color-grey-1);
        border-radius: 4px;
    }

    button a{
        font-weight: 500;
        font-size: 16px;
        color: var(--color-grey-0);
    }

    select{
        padding: 0px 16.2426px;
        height: 48px;
        background: var(--color-grey-2);
        border: 1.2182px solid var(--color-grey-3);
        border-radius: 4px;
        font-weight: 400;
        font-size: 16.2426px;
        color: var(--color-grey-1);
    }
    
    .error{
        font-weight: 400;
        font-size: 12px;
        color: #E83F5B;
        text-align: start;
        margin: -10px 0;
        padding: 0;
    }

`