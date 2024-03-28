import { Button, Kbd, Select } from "@chakra-ui/react"
import Model from "../../components/Model"
import { post as question, message, code, message2 } from "../../components/data/posts"
import { CodeBlock, atomOneDark } from "react-code-blocks"
import { jsx } from "react/jsx-runtime"
import { ArrowBigDown, ArrowBigUp, Ellipsis, Heart, Linkedin, MessageCircle, Star } from "lucide-react"

export const Question = () => {
  return (
    <Model className="">
      <div className="mx-12 md:mx-32 text-sm md:text-lg">
        <div className="bg-[#1C1E27] p-4 mx-12 rounded-l-2xl">
          <div>
            <div className="flex justify-between items-center my-4">
              <h1 className="text-4xl font-bold">{question.title}</h1>
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
            <div className="my-4">
              <CodeBlock
                text={code}
                language={"js"}
                showLineNumbers={true}
                theme={atomOneDark}
                customStyle={{
                  fontSize: "14px",
                  borderRadius: "16px"
                }}
              />
              <div className="my-4">
                <img className="rounded-2xl w-[100%] h-[500px] fit" src="/src/assets/images/attached.png" alt="attachement" />
              </div>
            </div>
            <div className="tags flex justify-between gap-2 my-4">
              <div className="flex gap-2">
                {question.tags.map((tag) => <span className="bg-blue-600 rounded-3xl py-1 px-2 text-center text-sm">{tag}</span>)}
              </div>
              <div className="cursor-pointer"><Ellipsis /></div>
            </div>
          </div>
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
          <div className="answers">
            <div className="flex items-center gap-12 px-8 bg-[#1C1E27] p-4 my-12 rounded-l-2xl">
              <div className="flex flex-col gap-8">
                <div className="text-center">
                  <ArrowBigUp size={40} />
                  303
                </div>
                <div className="text-center">
                  22
                  <ArrowBigDown size={40} />
                </div>
              </div>
              <div className="content">
                <div className="flex flex-col gap-2 font-sans	" dangerouslySetInnerHTML={{ __html: message2 }} />
                <p>You can try this: </p>
                <div className="my-4">
                  <CodeBlock
                    text={code}
                    language={"js"}
                    showLineNumbers={true}
                    theme={atomOneDark}
                    customStyle={{
                      fontSize: "14px",
                      borderRadius: "16px"
                    }}
                  />
                </div>
                <div className="flex justify-between items-center">
                  <div className="icons flex gap-4">
                    <div className="flex gap-2">
                      <MessageCircle />
                      <span className="">33</span>
                    </div>
                  </div>
                  <div className="cursor-pointer"><Ellipsis /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Model>
  )
}

