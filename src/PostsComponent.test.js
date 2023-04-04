import { render,screen } from "@testing-library/react"
import PostsComponent from "./PostsComponent"

describe('<Postscompoent testing',()=>{
    test('it should reder posts',async()=>{
        window.fetch=jest.fn().mockImplementationOnce(()=>{
            return new Promise((resolve)=>{
                resolve({
                    ok:true,
                    json:async()=>([
                        {id:1,
                        title:'First Post'},
                        {id:2,
                            title:'Second Post'}
                    ]    
                    )
                })
            })
        })
        //mockresolvedvalueonce
        render(<PostsComponent/>);
        const listItems= await screen.findAllByRole('listitem'); //findallbyrole returns promise
        expect(listItems).toHaveLength(2);
        //const listitem=await screen.getByRole("listitem"); //execute immediately
        expect(listItems).not.toHaveLength(0);
    })
})