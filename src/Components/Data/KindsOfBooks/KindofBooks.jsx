import mgTunThuArray from "../authors/mgTunThu";
import shweODaungArray from "../authors/shweudaung";
import zawGyiArray from "../authors/zawgyi";

const allBooks = mgTunThuArray.concat(shweODaungArray,zawGyiArray);

const translation = allBooks.filter((e)=>{
    return e.categories.includes("Translation")
  })
const mystery = allBooks.filter((e)=>{
    return e.categories.includes("Mystery")
})
const novel = allBooks.filter((e)=>{
    return e.categories.includes("Novels")
})
const poem = allBooks.filter((e)=>{
    return e.categories.includes("Poem")
})
const history = allBooks.filter((e)=>{
    return e.categories.includes("History")
})
const thriller = allBooks.filter((e)=>{
    return e.categories.includes("Thriller")
})
const fun = allBooks.filter((e)=>{
    return e.categories.includes("Funny")
})
const detective = allBooks.filter((e)=>{
    return e.categories.includes("Detective")
})
const knowledge = allBooks.filter((e)=>{
    return e.categories.includes("Knowledge")
})
export  {allBooks,translation,mystery,novel,poem,history,thriller,fun,detective,knowledge} 