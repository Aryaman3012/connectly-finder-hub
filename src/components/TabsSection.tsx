
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SearchTab } from "./tabs/SearchTab";
import { IntrosTab } from "./tabs/IntrosTab";
import { IntegrationsTab } from "./tabs/IntegrationsTab";
import { FriendsTab } from "./tabs/FriendsTab";
import { HistoryTab } from "./tabs/HistoryTab";

export const TabsSection = () => {
  return (
    <div className="container mx-auto py-6 px-4">
      <Tabs defaultValue="search" className="w-full">
        <TabsList className="grid w-full grid-cols-5 mb-8">
          <TabsTrigger value="search">Search</TabsTrigger>
          <TabsTrigger value="intros">Intros</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
          <TabsTrigger value="friends">Friends</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
        </TabsList>
        <TabsContent value="search" className="mt-6">
          <SearchTab />
        </TabsContent>
        <TabsContent value="intros" className="mt-6">
          <IntrosTab />
        </TabsContent>
        <TabsContent value="integrations" className="mt-6">
          <IntegrationsTab />
        </TabsContent>
        <TabsContent value="friends" className="mt-6">
          <FriendsTab />
        </TabsContent>
        <TabsContent value="history" className="mt-6">
          <HistoryTab />
        </TabsContent>
      </Tabs>
    </div>
  );
};
