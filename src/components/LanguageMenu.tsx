import {
	IconButton,
	Menu,
	MenuHandler,
	MenuItem,
	MenuList,
} from "@material-tailwind/react";
import i18next from "i18next";
import { useState } from "react";
import BrFlag from "../assets/images/br-flag.png";
import EnFlag from "../assets/images/en-flag.png";
import { Img } from "@chakra-ui/react";
import COOKIES_KEYS from "../configs/coockiesKeys";
import { setCookie } from "../utils/coockies";

export default function LanguageMenu() {
	const [selectedLanguage, setSelectedLanguage] =
		useState<"en" | "pt">(
			i18next.language as "en" | "pt",
		);
        const handleChangeLanguage = (language: "en" | "pt") => {
            setSelectedLanguage(language);
            setCookie(COOKIES_KEYS.language, JSON.stringify(language));
            i18next.changeLanguage(language);
          };

	return (
		<Menu >
			<MenuHandler>
				<IconButton placeholder={' '} >
					<Img
						src={
							selectedLanguage === "en"
								? EnFlag
								: BrFlag
						}
						alt="br flag"
						width={30}
						height={20}
					/>
				</IconButton>
			</MenuHandler>
			<MenuList  placeholder={undefined} className="flex items-center justify-center">
			<MenuItem
				className="flex items-center gap-2"
				style={{width: '5rem', height: '5rem',  fontSize: '0.8rem', flexDirection: 'column' }} 
				onClick={() => {
					handleChangeLanguage("pt");
				} }  placeholder={undefined}
			>
				<Img
					src={BrFlag}
					alt="br flag"
					width={25}
					height={20}
				/>
				Português
			</MenuItem>
			<MenuItem
				className="flex items-center gap-2"
				style={{width: '5rem', height: '5rem',  fontSize: '0.8rem', flexDirection: 'column' }} 
				onClick={() => {
					handleChangeLanguage("en");
				} }  placeholder={undefined}
			>
				<Img
					src={EnFlag}
					alt="en flag"
					width={25}
					height={20}
				/>
				English
			</MenuItem>
			</MenuList>
		</Menu>
	);
}
