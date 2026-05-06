import { useEffect, useState } from "react";
import AppBody from "./components/AppBody";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [isDark, setIsDark] = useState(
    document.documentElement.classList.contains("dark")
  );

  const toggleTheme = () => {
    const html = document.documentElement;
    html.classList.toggle("dark");
    setIsDark(!isDark);
  };

  useEffect(() => {
    const controller = new AbortController();

    const url =
      "https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=10";
    const options = { method: "GET", headers: { accept: "application/json" } };
    const fetchUsers = async () => {
      try {
        const response = await fetch(url, options);
        const data = await response.json();

        if (data["statusCode"] !== 200) {
          throw new Error("User not fetched");
        }
        const filteredUserObjectArray = data["data"]["data"].map((userObj) => {
          return {
            id: userObj["id"],
            name: userObj["name"],
            address: {
              city: userObj["location"]["city"],
              country: userObj["location"]["country"],
              postcode: userObj["location"]["postcode"],
            },
            email: userObj["email"],
            dob: userObj["dob"],
            registered: userObj["registered"]["date"],
            avatar: userObj["picture"]["thumbnail"],
          };
        });

        setUserData(filteredUserObjectArray);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUsers();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header Bar */}
      <div className="border-b border-border sticky top-0 z-50 bg-background">
        <div className="flex justify-between items-center px-6 py-4">
          <h1 className="text-2xl font-bold">UserPool</h1>
          <Button
            variant="outline"
            size="icon"
            onClick={toggleTheme}
          >
            {isDark ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="flex justify-center py-8">
        <div className="w-full md:w-[70%]">
          <div className="flex flex-col md:flex-row flex-wrap gap-4">
            <AppBody userData={userData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
