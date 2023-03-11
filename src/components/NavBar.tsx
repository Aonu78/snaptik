import { LANGUAGES } from '@/contants';
import { useThemeColor } from '@/hooks/useThemeColor';
import useTrans from '@/hooks/useTrans';
import {
  Box,
  Button,
  Heading,
  HStack,
  IconButton,
  List,
  ListItem,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Text,
  useTheme,
} from '@chakra-ui/react';
import { Open_Sans } from 'next/font/google';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { MdDarkMode, MdLanguage, MdLightMode } from 'react-icons/md';

type Props = {};

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: '400',
});

const NavBar = (props: Props) => {
  const theme = useTheme();
  const { navBackgroundColor, isDarkMode, textColor, toggleDarkMode } = useThemeColor();
  const router = useRouter();
  const trans = useTrans();

  return (
    <HStack bg={navBackgroundColor} justifyContent="space-between">
      <Link href="/">
        <Box px="16px" display="flex" w="100%" py="10px">
          <Heading
            className={openSans.className}
            fontSize="3xl"
            fontWeight="bold"
            color="primary.main"
            _hover={{
              color: textColor,
              cursor: 'pointer',
            }}
          >
            Snap
          </Heading>
          <Heading
            className={openSans.className}
            fontSize="3xl"
            fontWeight="bold"
            color={textColor}
          >
            Tik 1 Click
          </Heading>
        </Box>
      </Link>
      <Box display="flex" flex={1} justifyContent="flex-end">
        <HStack>
          <Link href="/contact" locale={router.locale}>
            <Text className={openSans.className} fontSize="sm" color={textColor} fontWeight="600">
              {trans.home.contact}
            </Text>
          </Link>
          <Box w="20px" />
          <Link href="/terms-of-service" locale={router.locale}>
            <Text className={openSans.className} fontSize="sm" color={textColor} fontWeight="600">
              {trans.home.terms}
            </Text>
          </Link>
          <Box w="20px" />
          <Link href="/privacy-policy" locale={router.locale}>
            <Text className={openSans.className} fontSize="sm" color={textColor} fontWeight="600">
              {trans.home.privacy}
            </Text>
          </Link>
        </HStack>
        <Box w="8%" />
        <IconButton
          icon={
            !isDarkMode ? (
              <MdDarkMode color={theme.colors.primary.dark} size="30px" />
            ) : (
              <MdLightMode color={theme.colors.primary.light} size="30px" />
            )
          }
          aria-label={'dark-mode'}
          onClick={toggleDarkMode}
          variant="unstyled"
        />
        <Box w="16px" />
        <Popover>
          <PopoverTrigger>
            <Button variant="unstyled">
              <MdLanguage size="30px" color={textColor} />
            </Button>
          </PopoverTrigger>
          <PopoverContent bg={navBackgroundColor} w="100%">
            {/* <PopoverHeader>
              <Text fontSize="md" fontWeight="bold" color={textColor}>
                Languages
              </Text>
            </PopoverHeader> */}
            <PopoverBody padding="0px">
              <List>
                {LANGUAGES.map((item) => (
                  <ListItem
                    key={item.alias}
                    _hover={{
                      bg: isDarkMode ? 'background.main' : 'background.dark2',
                    }}
                  >
                    <Link locale={item.alias} href={''}>
                      <Text
                        fontSize="md"
                        fontWeight="600"
                        color={textColor}
                        py="8px"
                        px="12px"
                        _hover={{
                          color: !isDarkMode ? 'primary.light' : 'primary.dark',
                        }}
                      >
                        {item.name}
                      </Text>
                    </Link>
                  </ListItem>
                ))}
              </List>
            </PopoverBody>
          </PopoverContent>
        </Popover>
        <Box w="16px" />
      </Box>
    </HStack>
  );
};

export default NavBar;
