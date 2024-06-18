import { createSwaggerSpec } from 'next-swagger-doc';
import dynamic from 'next/dynamic';
import { SwaggerUIProps } from "swagger-ui-react";
import 'swagger-ui-react/swagger-ui.css';

const SwaggerUI = dynamic<SwaggerUIProps>(import('swagger-ui-react'), { ssr: false });

function ApiDoc() {
  const spec = getSpec()
  return <SwaggerUI spec={spec} />;
}

 const getSpec = async () => {
  const spec: Record<string, any> = createSwaggerSpec({
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Next Swagger API Example',
        version: '1.0',
      },
    },
  });

  return {
    props: {
      spec,
    },
  };
};

export default ApiDoc;