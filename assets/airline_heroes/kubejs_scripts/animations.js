PalladiumEvents.registerAnimations((event) => {
    event.registerForPower('airline_heroes/gas_form_animation', 'airline_heroes:gas', 10, (builder) => {
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
	
event.registerForPower('airline_heroes/half_mass_animation', 'airline_heroes:gas', 16, (builder) => {

    const progress = animationUtil.getAnimationTimerAbilityValue(
        builder.getPlayer(),
        'airline_heroes:gas',
        'half_mass_animation',
        builder.getPartialTicks()
    );

    if (progress > 0.0) {

        // ---- Forward → Hold → Reverse ---- //
        let p;
        if (progress < 0.25) {
            // First 50 ticks → play forward
            p = progress * 4; // 0 → 1
        } else if (progress < 0.75) {
            // Middle 100 ticks → hold at peak
            p = 1; // stay at full transform
        } else {
            // Final 50 ticks → reverse back to zero
            p = (1 - progress) * 4; // 1 → 0
        }

        // HEAD
        builder.get('head')
            .rotateY(0.2 * p)
            .rotateZ(-0.5 * p)
            .rotateX(0.9 * p)
            .animate('InOutCubic', p);

        // CHEST
        builder.get('chest')
            .animate('InOutCubic', p);

        // LEGS
        builder.get('left_leg')
            .rotateX(-0.2 * p)
            .rotateZ(-0.2 * p)
            .animate('InOutCubic', p);

        builder.get('right_leg')
            .rotateX(0.3 * p)
            .rotateZ(0.4 * p)
            .animate('InOutCubic', p);

        // ARMS
        builder.get('left_arm')
            .rotateX(-1.6 * p)
            .rotateY(0.7 * p)
            .rotateZ(0.4 * p)
            .animate('InOutCubic', p);

        builder.get('right_arm')
            .rotateX(0.3 * p)
            .rotateZ(0.4 * p)
            .rotateY(-0.4 * p)
            .animate('InOutCubic', p);
    }
});
	
	    event.registerForPower('airline_heroes/hand_pos', 'airline_heroes:shotgun', 2, (builder) => {
        const progress = animationUtil.getAnimationTimerAbilityValue(builder.getPlayer(), 'airline_heroes:shotgun', 'hand_pos', builder.getPartialTicks());
if (progress > 0.0) {	
                     if (builder.isFirstPerson()) {
            builder.get('right_arm').setXRotDegrees(-2).animate('easeInOutCubic', progress);
            builder.get('right_arm').setYRotDegrees(40).animate('easeInOutCubic', progress);
            builder.get('left_arm').setXRotDegrees(-2).animate('easeInOutCubic', progress);
            builder.get('left_arm').setYRotDegrees(2).animate('easeInOutCubic', progress);
        }
}
    });
	
	
		    event.registerForPower('airline_heroes/block_animation', 'airline_heroes:hot_blooded', 10, (builder) => {
        const progress = animationUtil.getAnimationTimerAbilityValue(builder.getPlayer(), 'airline_heroes:hot_blooded', 'block_animation', builder.getPartialTicks());
if (progress > 0.0) {
if (!builder.isFirstPerson()) {	
	  builder.get('left_arm')	
                     .setY(4)
                     .setZ(-2)					 
                     .rotateY(0.5)	
					  .rotateX(-2.4)
                      .rotateZ(0)						  
					.animate('InOutCubic', progress); 
      builder.get('right_arm')		
                      .setY(4)
                      .setZ(-2)					  
                     .rotateY(-0.5)	
					  .rotateX(-2.4)
                      .rotateZ(0)						  
					.animate('InOutCubic', progress); 
} else {
		  builder.get('left_arm')	
                     .setY(4)
                     .setZ(0)					 
                     .rotateY(0)	
					  .rotateX(-1)
                      .rotateZ(0)						  
					.animate('InOutCubic', progress); 
      builder.get('right_arm')		
                      .setY(4)
                      .setZ(0)					  
                     .rotateY(0)	
					  .rotateX(-1)
                      .rotateZ(0)						  
					.animate('InOutCubic', progress); 
}
}
    });
			    event.registerForPower('airline_heroes/grab_animation', 'airline_heroes:hot_blooded', 10, (builder) => {
        const progress = animationUtil.getAnimationTimerAbilityValue(builder.getPlayer(), 'airline_heroes:hot_blooded', 'grab_animation', builder.getPartialTicks());
if (progress > 0.0) {
if (!builder.isFirstPerson()) {
	  builder.get('left_arm')	
           				 
                     .rotateY(0.4)	
					  .rotateX(-1.5)
                      .rotateZ(0)						  
					.animate('InOutCubic', progress);  
} else {
		  builder.get('left_arm')	
                     .setY(1)		  
                     .rotateY(0)	
					  .rotateX(-0.5)
                      .rotateZ(0)						  
					.animate('InOutCubic', progress); 
}
}
    });
	
	
        event.registerForPower('airline_heroes/ground_slam_animation', 'airline_heroes:hot_blooded', 5, (builder) => {
        const progress = animationUtil.getAnimationTimerAbilityValue(builder.getPlayer(), 'airline_heroes:hot_blooded', 'ground_slam_animation', builder.getPartialTicks());
if (progress > 0.0) {
	  builder.get('left_leg')	 
                     .moveY(-5)
                     .moveZ(-4)					 
                     .rotateY(0)	
					  .rotateX(-0.2)
                      .rotateZ(0)						  
					.animate('InOutCubic', progress);  
}
    });
	
		    event.registerForPower('airline_heroes/hulk_clap_animation', 'airline_heroes:hot_blooded', 5, (builder) => {
        const progress = animationUtil.getAnimationTimerAbilityValue(builder.getPlayer(), 'airline_heroes:hot_blooded', 'hulk_clap_animation', builder.getPartialTicks());
if (progress > 0.0) {
if (!builder.isFirstPerson()) {
if (progress < 0.8) {	
	  builder.get('left_arm')					 

					  .rotateX(-1.7)

					.animate('InOutCubic', progress); 
      builder.get('right_arm')						  
                
					  .rotateX(-1.7)

					.animate('InOutCubic', progress);
} else {
		  builder.get('left_arm')					 
                      .rotateX(-1.7)
					  .rotateY(0.5)

					.animate('InOutCubic', progress); 
      builder.get('right_arm')						  
                      .rotateX(-1.7)
					  .rotateY(-0.5)

					.animate('InOutCubic', progress);
}
} else {
		  builder.get('left_arm')	
                     .setY(4)
                     .setZ(0)					 
                     .rotateY(0)	
					  .rotateX(-1)
                      .rotateZ(0)						  
					.animate('InOutCubic', progress); 
      builder.get('right_arm')		
                      .setY(4)
                      .setZ(0)					  
                     .rotateY(0)	
					  .rotateX(-1)
                      .rotateZ(0)						  
					.animate('InOutCubic', progress); 
}
}
    });
});

