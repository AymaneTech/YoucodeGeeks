import { Button, Select } from "@chakra-ui/react"
import Model from "../../components/Model"
import { post as question, message } from "../../components/data/posts"

export const Question = () => {
  return (
    <Model className="">
      <div className="mx-12 md:mx-32 text-sm md:text-lg">
        <div className="">
          <div className="flex justify-between items-center">
            <h1 className="text-4xl font-bold my-4">{question.title}</h1>
            <Button colorScheme="blue">Ask a question</Button>
          </div>
          <div className="dates-informations flex flex-wrap md:justify-start justify-center gap-2 text-sm text-[#7b7f93]">
            <div>Asked at: <span className="text-white mr-2 font-bold">{question.created_at}</span></div>
            <div>Updated at: <span className="text-white mr-2 font-bold">{question.created_at}</span></div>
            <div>related to: <span className="text-white mr-2 font-bold">{question.category.name}</span></div>
          </div>
          <hr className="m-4 border-[#7B7F93]" />
        </div>
        <div className="content">
          <div className="flex flex-col gap-2 font-sans	" dangerouslySetInnerHTML={{ __html: message }} />

          <div className="tags flex gap-2 my-4">
            {question.tags.map((tag) => <span className="bg-blue-600 rounded-3xl py-1 px-2 text-center text-sm">{tag}</span>)}
          </div>
          <div className="answers my-5">
            <div className="header flex justify-between">
              <h2 className="text-4xl font-bold">5 answers</h2>
              <Select w={40}>
                <option className="text-[#1C1E27]" value="value">value</option>
                <option className="text-[#1C1E27]" value="value">value</option>
                <option className="text-[#1C1E27]" value="value">value</option>
                <option className="text-[#1C1E27]" value="value">value</option>
              </Select>
            </div>
            <hr className="m-4 border-[#7B7F93]" />
            
          </div>
        </div>
      </div>
    </Model>
  )
}

