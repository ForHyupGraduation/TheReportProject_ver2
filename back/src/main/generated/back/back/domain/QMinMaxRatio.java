package back.back.domain;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;


/**
 * QMinMaxRatio is a Querydsl query type for MinMaxRatio
 */
@Generated("com.querydsl.codegen.DefaultEmbeddableSerializer")
public class QMinMaxRatio extends BeanPath<MinMaxRatio> {

    private static final long serialVersionUID = 1394730895L;

    public static final QMinMaxRatio minMaxRatio = new QMinMaxRatio("minMaxRatio");

    public final NumberPath<Double> maxPosts = createNumber("maxPosts", Double.class);

    public final NumberPath<Double> maxVolume = createNumber("maxVolume", Double.class);

    public final NumberPath<Double> minPosts = createNumber("minPosts", Double.class);

    public final NumberPath<Double> minVolume = createNumber("minVolume", Double.class);

    public QMinMaxRatio(String variable) {
        super(MinMaxRatio.class, forVariable(variable));
    }

    public QMinMaxRatio(Path<? extends MinMaxRatio> path) {
        super(path.getType(), path.getMetadata());
    }

    public QMinMaxRatio(PathMetadata metadata) {
        super(MinMaxRatio.class, metadata);
    }

}

