import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import MapPinIcon from "@/components/icons/lucide-map-pin";
import { MapIcon } from "./icons/lucide-map";
import SignPostIcon from "@/components/icons/lucide-signpost";
import { MailIcon } from "./icons/lucide-mail";
import { CalendarIcon } from "./icons/lucide-calendar";
import { CakeIcon } from "./icons/lucide-cake";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import DateComponent from "./custom/Date";

interface User {
  id: number;
  name: {
    title: string;
    first: string;
    last: string;
  };
  address: {
    city: string;
    country: string;
    postcode: string | number;
  };
  email: string;
  dob: {
    date: string;
    age: number;
  };
  registered: string;
  avatar: string;
}

interface AppBodyProps {
  userData: User[];
}

const AppBody = ({ userData }: AppBodyProps) => {
  return (
    <>
      {userData.map((user) => (
        <Card
          key={user.id}
          className="w-[280px] sm:w-[320px] text-xs sm:text-sm my-[10vh] mx-auto flex flex-col !ring-0 dark:bg-background"
        >
          <CardHeader>
            <div className="flex gap-4 items-center">
              <Avatar>
                <AvatarImage src={user.avatar} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <CardTitle>
                <h3>{`${user.name.title} ${user.name.first} ${user.name.last}`}</h3>
              </CardTitle>
            </div>
          </CardHeader>
          <CardFooter>
            <div className="flex flex-col">
              <h3 className="mb-4">
                <strong>Acount Details</strong>
              </h3>
              <Tabs defaultValue="general" className="w-[400px]">
                <TabsList>
                  <TabsTrigger value="general">General</TabsTrigger>
                  <TabsTrigger value="personal">Personal</TabsTrigger>
                </TabsList>
                <TabsContent value="general">
                  <div className="flex flex-col gap-2 sm:gap-2 mt-4">
                    <div className="flex items-center gap-2 text-xs">
                      <Badge className="">
                        <CalendarIcon size={16} />
                        <strong>Active Since</strong>
                      </Badge>
                      <strong>
                        <DateComponent
                          className="text-sm"
                          date={user.registered}
                        />
                      </strong>
                    </div>
                    <div className="mt-2 flex gap-2">
                      <MapPinIcon size={20} />
                      <Badge className="flex">
                        <strong>Country</strong>
                      </Badge>
                      <p>{user.address.country}</p>
                    </div>
                    <div className="mt-2 flex gap-2">
                      <MapIcon size={20} />
                      <Badge className="flex">
                        <strong>City</strong>
                      </Badge>
                      <p>{user.address.city}</p>
                    </div>
                    <div className="mt-2 flex gap-2 mb-2">
                      <SignPostIcon size={20} />
                      <Badge className="flex">
                        <strong>Pincode</strong>
                      </Badge>
                      <p>{user.address.postcode}</p>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="personal">
                  <CardDescription className="flex flex-col gap-4 mt-4">
                    <div className="flex gap-2">
                      <Badge>
                        <MailIcon size={16} />
                      </Badge>
                      <strong>{user.email}</strong>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <Badge className="">
                        <CakeIcon size={16} className="mb-1" />
                        <strong>DOB</strong>
                      </Badge>
                      <strong>
                        <DateComponent
                          className="text-sm"
                          date={user.dob.date}
                        />
                      </strong>
                    </div>
                  </CardDescription>
                </TabsContent>
              </Tabs>
            </div>
          </CardFooter>
        </Card>
      ))}
    </>
  );
};

export default AppBody;
