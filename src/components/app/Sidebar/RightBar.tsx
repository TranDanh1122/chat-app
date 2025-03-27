
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { WhoFollowList } from "../WhoToFollow";
import { TopicList } from "../TrendingTopic";
export default function AppRightbar() {
    return (
        <div className="bg-neutral-950 p-3 h-full">
            <Tabs defaultValue="follow" className="w-full">
                <TabsList className="w-full bg-neutral-800 text-white ">
                    <TabsTrigger value="follow">Who to follow</TabsTrigger>
                    <TabsTrigger value="topic">Trending topics</TabsTrigger>
                </TabsList>
                <TabsContent value="follow">
                    <WhoFollowList />
                </TabsContent>
                <TabsContent value="topic">
                    <TopicList />
                </TabsContent>
            </Tabs>


        </div>
    )
}
