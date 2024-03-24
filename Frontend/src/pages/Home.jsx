import { Tabs, TabList, TabPanels, Tab, TabPanel, TabIndicator } from '@chakra-ui/react'
import { Questions } from "../components/Questions";
import { posts } from "../components/data/posts";
import Posts from "../components/Posts";
import { Slink } from "../components/partials/Buttons";
import Model from "./Model";


export const Home = () => {
  return (
    <Model>
      < Posts posts={posts} />

      <Tabs position="" variant="unstyled">
        <div className="flex justify-between items-center p-3">
          <TabList>
            <Tab>
              All Questions</Tab>
            <Tab>Two</Tab>
            <Tab>Three</Tab>
          </TabList>
          <Slink to="questions/create">Ask A question</Slink>

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
    </Model>


  );
};


