import * as React from "react";
import styled from "styled-components";
import Interval from "../components/Interval";
import SourceDetail from "../components/SourceDetail";
import Timestamp from "../components/Timestamp";
import { FluxObjectKind, HelmChart } from "../lib/api/core/types.pb";

type Props = {
  className?: string;
  name: string;
  namespace: string;
};

function HelmChartDetail({ name, namespace, className }: Props) {
  return (
    <SourceDetail
      name={name}
      namespace={namespace}
      type={FluxObjectKind.KindHelmChart}
      className={className}
      info={(ch: HelmChart) => [
        ["Type", FluxObjectKind.KindHelmChart],
        ["Chart", ch?.chart],
        ["Ref", ch?.sourceRef?.name],
        ["Last Updated", <Timestamp time={ch?.lastUpdatedAt} />],
        ["Interval", <Interval interval={ch?.interval} />],
        ["Cluster", ch?.clusterName],
        ["Namespace", ch?.namespace],
      ]}
    />
  );
}

export default styled(HelmChartDetail).attrs({
  className: HelmChartDetail.name,
})``;
