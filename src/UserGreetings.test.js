import {render,screen,fireEvent} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import UserGreetings from './UserGreetings';

beforeEach(()=>{
    render(<UserGreetings/>)
})
describe('testing User Greeting on load',()=>{
    test('check hello user',()=>{
     
    
        const linkText=screen.getByText("Hello",{exact:false});
        expect(linkText).toBeInTheDocument();
    })
    test('check text on load',()=>{
       
       
        const linktext=screen.getByText("React Testing Library");
        expect(linktext).toBeInTheDocument();
    })
   
})
describe('User Greetings on btn click',()=>{
    test('change text on btn click',async()=>{
        //Arrange
       
        //Act
        const btnElement=screen.getByTestId('changeText');
        expect(btnElement).toBeInTheDocument();
       userEvent.click(btnElement,undefined,{skipPointerEventsCheck:true});
       
        //Assert
        const outputEl=await screen.findByText('Text Changed');
        expect(outputEl).toBeInTheDocument();
    
    });
    test('should not render react testing after btn clcik',()=>{
       
        const btnElement=screen.getByTestId('changeText');
        expect(btnElement).toBeInTheDocument();
        fireEvent.click(btnElement);
       const elementOU=screen.queryByText("React Testing Library");
       expect(elementOU).not.toBeInTheDocument();
    //    const elementOU=screen.getByTestId("reacttesting");
    //    expect(elementOU.textContent).toBe("React Testing Library");
    });
    test('input to have 10 has intial value',()=>{
        
        const inputElement=screen.getByTestId('input');
        expect(inputElement.value).toBe("10");
    });
    test("entering value input works",()=>{
       
        const inputElement=screen.getByTestId('input');
        fireEvent.change(inputElement,{
            target:{
                value:11
            }
        });
        expect(inputElement.value).toBe("11");

    })
})