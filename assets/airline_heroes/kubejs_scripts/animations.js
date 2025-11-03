PalladiumEvents.registerAnimations((event) => {
    event.registerForPower('airline_heroes/gas_form_animation', 'airline_heroes:gas', 2, (builder) => {
        const progress = animationUtil.getAnimationTimerAbilityValue(builder.getPlayer(), 'airline_heroes:gas', 'gas_form_animation', builder.getPartialTicks());
if (progress > 0.0) {	
                    builder.get('head')					               
                    .setY(17)
					.animate('InOutCubic', progress);      
  builder.get('chest')					               
                     .scaleY(0)	
					  .scaleX(0)
                      .scaleZ(0)						  
					.animate('InOutCubic', progress); 
	  builder.get('left_leg')					               
                     .scaleY(0)	
					  .scaleX(0)
                      .scaleZ(0)						  
					.animate('InOutCubic', progress); 
	  builder.get('right_leg')					               
                     .scaleY(0)	
					  .scaleX(0)
                      .scaleZ(0)						  
					.animate('InOutCubic', progress); 
	  builder.get('left_arm')					               
                     .scaleY(0)	
					  .scaleX(0)
                      .scaleZ(0)						  
					.animate('InOutCubic', progress); 
      builder.get('right_arm')					               
                     .scaleY(0)	
					  .scaleX(0)
                      .scaleZ(0)						  
					.animate('InOutCubic', progress); 
}
    });
	
});

