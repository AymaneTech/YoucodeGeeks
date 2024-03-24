import Navbar from "../components/partials/Navbar";
import Sidebar from "../components/partials/Sidebar";
import { Tabs, TabList, TabPanels, Tab, TabPanel, TabIndicator, Button } from '@chakra-ui/react'
import { Questions } from "../components/Questions";
import { posts } from "../components/data/posts";
import Posts from "../components/Posts";


export const Home = () => {
  return (
    <main className="bg-[#16161a] text-white grid grid-cols-12 grid-rows-auto font-mono">
      <Navbar />
      <div className="col-span-12 md:col-span-2 ">
        <Sidebar />
      </div>
      <div className="col-span-12 md:col-span-10 mx-2 md:mx-20">
        <Posts posts={posts} />

        <Tabs position="" variant="unstyled">
          <div className="flex justify-between items-center p-3">
            <TabList>
              <Tab>
                All Questions</Tab>
              <Tab>Two</Tab>
              <Tab>Three</Tab>
            </TabList>
            <div>
              <Button>Ask a question</Button>
            </div>
          </div>
          <TabIndicator
            mt="-1.5px"
            height="2px"
            bg="blue.500"
            borderRadius="1px"
          />
          <TabPanels>
            <TabPanel>
              <Questions posts={posts} />
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>

    </main >

  );
};


