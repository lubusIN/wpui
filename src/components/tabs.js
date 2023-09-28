import {
    Icon,
    TabPanel,
    __experimentalText as Text,
    __experimentalHStack as HStack,
} from "@wordpress/components";
import { arrowDown, arrowRight, arrowUp, wordpress } from "@wordpress/icons";

export default function Tabs() {
    const tabs = [
        {
            name: 'my-account',
            title: 'My Account',
            className: 'my-account-tab',
            icon: (
                <HStack>
                    <Icon icon={wordpress} />
                    <small>
                        My Account
                    </small>
                </HStack>

            ),
        },
        {
            name: 'company',
            title: 'Company',
            className: 'company-tab',
            icon: (
                <HStack>
                    <Icon icon={arrowDown} />
                    <small>
                        Company
                    </small>
                </HStack>

            ),
        },
        {
            name: 'members',
            title: 'Team Members',
            className: 'members-tab',
            icon: (
                <HStack>
                    <Icon icon={arrowUp} />
                    <small>
                        Team Members
                    </small>
                </HStack>

            ),
        },
        {
            name: 'billing',
            title: 'Billing',
            className: 'billing-tab',
            icon: (
                <HStack>
                    <Icon icon={arrowRight} />
                    <small>
                        Billing
                    </small>
                </HStack>

            ),
        },
    ];

    return (
        <TabPanel tabs={tabs}>
            {(tab) => (
                <HStack>
                    <Text>{tab.title}</Text>
                </HStack>
            )}
        </TabPanel>
    );
}