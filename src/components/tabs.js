/**
 * WordPress dependencies.
 */
import {
    Icon,
    TabPanel,
    __experimentalText as Text,
    __experimentalHStack as HStack,
} from "@wordpress/components";
import { commentAuthorAvatar, home, payment, people } from "@wordpress/icons";

/**
 * Render Tabs
 */
function Tabs() {
    const tabs = [
        {
            name: 'my-account',
            title: 'My Account',
            icon: (
                <HStack>
                    <Icon size={35} icon={commentAuthorAvatar} />
                    <Text size={14}>
                        My Account
                    </Text>
                </HStack>
            ),
        },
        {
            name: 'company',
            title: 'Company',
            icon: (
                <HStack>
                    <Icon size={35} icon={home} />
                    <Text size={14}>
                        Company
                    </Text>
                </HStack>
            ),
        },
        {
            name: 'members',
            title: 'Team Members',
            icon: (
                <HStack>
                    <Icon size={35} icon={people} />
                    <Text size={14}>
                        Team Members
                    </Text>
                </HStack>
            ),
        },
        {
            name: 'billing',
            title: 'Billing',
            icon: (
                <HStack>
                    <Icon size={35} icon={payment} />
                    <Text size={14}>
                        Billing
                    </Text>
                </HStack>
            ),
        },
    ];

    return (
        <HStack justify="center">
            <TabPanel tabs={tabs}>
                {(tab) => ('')}
            </TabPanel>
        </HStack>
    );
};

export default Tabs;
