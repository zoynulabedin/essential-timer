import { Button, Card, Layout, Page } from "@shopify/polaris";

type Props = {};

const Billing = (props: Props) => {
  return (
    <Page>
      <Layout>
        <Layout.Section>
          <Card>
            <h1>Monthly</h1>
            <Button>$2</Button>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
};

export default Billing;
