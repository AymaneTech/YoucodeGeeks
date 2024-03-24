
import EditorComponent  from "../../components/EditorComponent"
import Model from "../../components/Model"
import {
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  ListItem,
  Textarea,
  UnorderedList,
} from '@chakra-ui/react'



export const Create = () => {
  return (
    <Model>
      <section className="mt-12 flex flex-col gap-8">
        <div className="flex items-center gap-8">
          <div className="flex flex-col gap-8">
            <h1 className="text-3xl">Ask public question to the community: </h1>
            <div className="flex flex-col gap-4 p-6 border w-[800px]  border-[#7b7f93] rounded-lg  bg-[#1c1e27]">
              <h2 className="font-bold text-3xl">Hey Nerd! </h2>
              <p>Writing a good question let others understand and help you find the solution, so write a clever question</p>
              <strong>Steps to follow: </strong>
              <UnorderedList>
                <ListItem>Lorem ipsum dolor sit amet</ListItem>
                <ListItem>Consectetur adipiscing elit</ListItem>
                <ListItem>Integer molestie lorem at massa</ListItem>
                <ListItem>Facilisis in pretium nisl aliquet</ListItem>
              </UnorderedList>
            </div>
          </div>
          <div>
            <img src="/src/assets/code.png" alt="" />
          </div>
        </div>
        <div className="flex flex-col gap-4 p-6 border border-[#7b7f93] rounded-lg  bg-[#1c1e27]">
          <form>
            <div className="flex flex-col gap-6">
              <FormControl isRequired>
                <FormLabel>Question Title</FormLabel>
                <Input border={"1px solid #7B7f93"} type='text' placeholder="eg: How fetch an api in react ?" />
                <FormHelperText>Be specific, and imagine you're asking a person.</FormHelperText>
              </FormControl>


              <FormControl isRequired>
                <FormLabel>Question Details</FormLabel>
                <Textarea border={"1px solid #7B7f93"} placeholder="eg: I don't find the wanted data in the response" />
                <FormHelperText>Expand what you said in the title.</FormHelperText>
              </FormControl>

              <EditorComponent/>
            </div>
          </form>
        </div>
      </section>
    </Model>
  )
}

