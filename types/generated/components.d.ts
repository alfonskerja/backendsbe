import type { Schema, Attribute } from '@strapi/strapi';

export interface SpecificationsProductDetails extends Schema.Component {
  collectionName: 'components_specifications_product_details';
  info: {
    displayName: 'Product_Value';
    icon: 'chartBubble';
    description: '';
  };
  attributes: {
    impedance: Attribute.String;
    dc_resistance_re: Attribute.String;
    coil_inductance_le: Attribute.String;
    effective_piston_area_sd: Attribute.String;
    voice_coil_diameter: Attribute.String;
    voice_coil_height: Attribute.String;
    air_gap_height: Attribute.String;
    linear_coil_travel_pp: Attribute.String;
    moving_mass_mms: Attribute.String;
    free_air_resonance_fs: Attribute.String;
    sensitivity: Attribute.String;
    mechanical_q_factor_qms: Attribute.String;
    electrical_q_factor_qes: Attribute.String;
    total_q_factor_qts: Attribute.String;
    force_factor_bi: Attribute.String;
    rated_power_handling: Attribute.String;
    magnetic_flux_density: Attribute.String;
    magnet_weight: Attribute.String;
    net_weight: Attribute.String;
    equivalent_volume_vas: Attribute.String;
    compliance_cms: Attribute.String;
    mechanical_loss_rms: Attribute.String;
    recommended_frequency_range: Attribute.String;
    max_mechanical_cone_excursion_xmech: Attribute.String;
  };
}

export interface SpecificationsProductUnit extends Schema.Component {
  collectionName: 'components_specifications_product_units';
  info: {
    displayName: 'Product_Unit';
    description: '';
  };
  attributes: {
    impedance: Attribute.String;
    dc_resistance_re: Attribute.String;
    coil_inductance_le: Attribute.String;
    effective_piston_area_sd: Attribute.String;
    voice_coil_diameter: Attribute.String;
    voice_coil_height: Attribute.String;
    air_gap_height: Attribute.String;
    linear_coil_travel_pp: Attribute.String;
    moving_mass_mms: Attribute.String;
    free_air_resonance_fs: Attribute.String;
    sensitivity: Attribute.String;
    mechanical_q_factor_qms: Attribute.String;
    electrical_q_factor_qes: Attribute.String;
    total_q_factor_qts: Attribute.String;
    force_factor_bi: Attribute.String;
    rated_power_handling: Attribute.String;
    magnetic_flux_density: Attribute.String;
    magnet_weight: Attribute.String;
    net_weight: Attribute.String;
    equivalent_volume_vas: Attribute.String;
    compliance_cms: Attribute.String;
    mechanical_loss_rms: Attribute.String;
    recommended_frequency_range: Attribute.String;
    max_mechanical_cone_excursion_xmech: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'specifications.product-details': SpecificationsProductDetails;
      'specifications.product-unit': SpecificationsProductUnit;
    }
  }
}
