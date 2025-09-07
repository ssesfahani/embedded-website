import DiscordLogo from "./discord-icon.svg?react";
import { Button } from "./ui/button";

export function AddToServerButton() {
  return (
    <Button
      onClick={() => {
        window.open(
          "https://discord.com/oauth2/authorize?client_id=1402327963029999646",
          "_blank"
        );
      }}
      className="bg-[#5865f2] hover:bg-[#4752c4] text-white font-sans font-medium px-6 py-2 rounded-lg transition-all duration-200 hover:scale-105"
    >
      <DiscordLogo />
      Add to Server
    </Button>
  );
}
