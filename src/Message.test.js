import{screen,render}from '@testing-library/react';
import Message from './Message';
// describe('<Message Component',()=>{
//     test('renders success message',()=>{
//        render(<Message/>);
//        const textElement=screen.queryByText('it is success message');
//        expect(textElement).toBeInTheDocument();
//     });
//     test('renders error message',()=>{
//         const testProps={
//             messageText:'error'
//         }
//         render(<Message {...testProps}/>);
//         const textElement=screen.queryByText('it is error message');
//         expect(textElement).toBeInTheDocument();
//      })
// })
test("Snapshot test",()=>{
    expect(render(<Message/>)).toMatchSnapshot();
})
